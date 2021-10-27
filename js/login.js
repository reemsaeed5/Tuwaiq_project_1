function Item (name , Password)
{
this.name = name;
this.email = email;
this.password = passeord;
}


$('#Name').click(function(){
    let name = 'reem';
    
    let password = 123456;
    let newItem = new Item(name, qty, price);

    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));

    } else
    {

        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})