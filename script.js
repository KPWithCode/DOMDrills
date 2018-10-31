document.addEventListener("DOMContentLoaded", function (event) {
    let headerContainer = document.createElement('div');
    let header = document.createElement('h1');
    let headerText = document.createTextNode('This is an h1');
    header.appendChild(headerText);
    headerContainer.appendChild(header);
    document.body.appendChild(headerContainer);


    let h2 = document.createElement('h2');
    let header2Text = document.createTextNode('This is an h2');
    h2.appendChild(header2Text);
    headerContainer.appendChild(h2);

    let h3 = document.createElement('h3');
    let header3Text = document.createTextNode('This is an h3');
    h3.appendChild(header3Text);
    headerContainer.appendChild(h3);

    let h4 = document.createElement('h4');
    let header4Text = document.createTextNode('This is an h4');
    h4.appendChild(header4Text);
    headerContainer.appendChild(h4);

    let h5 = document.createElement('h5');
    let header5Text = document.createTextNode('This is an h5');
    h5.appendChild(header5Text);
    headerContainer.appendChild(h5);

    let h6 = document.createElement('h6');
    let header6Text = document.createTextNode('This is an h6');
    h6.appendChild(header6Text);
    headerContainer.appendChild(h6);

    // Event listener for each header
    header.addEventListener('dblclick', colorChange);
    h2.addEventListener('dblclick', colorChange);
    h3.addEventListener('dblclick', colorChange);
    h4.addEventListener('dblclick', colorChange);
    h5.addEventListener('dblclick', colorChange);
    h6.addEventListener('dblclick', colorChange);

    function colorChange(e) {
        // console.log(e.target)
        let colorChange = ['Green', 'Pink', 'Yellow', 'Burgundy', 'black', 'brown', 'purple', 'Red'];
        let randomIndex = Math.floor(Math.random() * colorChange.length)
        e.target.style.color = colorChange[randomIndex]
    }


    
// Getting button Elements by Class Name btn. An array of 0 as it is the only class
let btn = document.getElementsByClassName('btn')[0];
// Event Listener so that List Item is inserted when clicked once
btn.addEventListener('click', insertListItem);
//define list Count 
let listCount = 0;
//listCount increments by 1
listCount++;
// function to insert list item
    function insertListItem(e) {
        
        //Create Unordered List
        let ul = document.createElement('ul');
        //List element for Text
        let list = document.createElement('li');
        //Create list text for list element
        let listText = document.createTextNode(' This is list item ' + listCount++)
        //appending
        headerContainer.appendChild(ul)
        ul.appendChild(list);
        list.appendChild(listText);
       
      //Apply Event Listener to change of font to one of the other colors
      list.addEventListener('click',function (e)   {
        let colorChange = ['Green', 'Pink', 'Yellow', 'Burgundy', 'black', 'brown', 'purple', 'Red'];
        let randomIndex = Math.floor(Math.random() * colorChange.length)
        e.target.style.color = colorChange[randomIndex]
      })
    }
      
});