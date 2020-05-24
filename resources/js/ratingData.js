function addRating() {
    var database = firebase.database();
    var ratHolders = document.getElementsByClassName('rats')
    console.log(ratHolders)
    for (let rat of ratHolders) {
        var ref = database.ref().child('ratings').child('r' + rat.id);
        ref.on('value', function (snapshot) {
            rat.innerHTML = snapshot.val();
        })
    }
}
function getRating() {
    var database = firebase.database();
    var btns = document.getElementsByClassName('rat-submit')
    for (let btn of btns) {
        btn.addEventListener('click', async function () {
            var ref_rating = database.ref().child('ratings').child('r' + btn.id);
            var ref_number = database.ref().child('number_of_ratings').child('r' + btn.id);
            await ref_number.once('value').then(function (snapshot) {
                window.no = snapshot.val() || 0;
            })
            await ref_rating.once('value').then(function (snapshot) {
                window.rating = snapshot.val() || 0;
            });
            no = parseInt(no);
            rating = parseFloat(rating);
            let data = parseInt(document.getElementsByClassName('rat-enter')[0].value);
            let nr = (rating * no + data);
            no += 1;
            nr = nr / no;
            nr = Math.round(nr * 10) / 10;
            ref_rating.set(JSON.stringify(nr));
            ref_number.set(JSON.stringify(no));
        });

    }
}