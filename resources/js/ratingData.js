function addRating() {
    var database = firebase.database();
    var ratHolders = document.getElementsByClassName('rats')
    console.log(ratHolders)
    for (let rat of ratHolders) {
        var ref = database.ref().child('ratings').child('r' + rat.id);
        ref.on('value',function(snapshot){
            rat.innerHTML = snapshot.val();
        })
    }
}