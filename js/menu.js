// let navbar = document.querySelector('.navbar');
// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }
// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () =>{
// searchForm.classList.toggle('active');
// navbar.classList.remove('active');
// cartItem.classList.remove('active');
// }
// let cartItem = document.querySelector('.cart-items-container');
// document.querySelector('#cart-btn').onclick = () =>{
// cartItem.classList.toggle('active');
// navbar.classList.remove('active');
// searchForm.classList.remove('active');
// }

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}


$('#fishBurger').click(function(){
    let name = 'Fish burger';
    let qty = parseInt($('#fishBurger-qt').text());
    let price = 56;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#BeefSandwich').click(function(){
    let name = 'beef sandwich';
    let qty = parseInt($('#BeefSandwich-qt').text());
    let price = 56;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#MexicanBurger').click(function(){
    let name = 'mexican burger';
    let qty = parseInt($('#MexicanBurger-qt').text());
    let price = 56;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#beefBurger').click(function(){
    let name = 'beef burger';
    let qty = parseInt($('#beefBurger-qt').text());
    let price = 56;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#penneArrabbiata').click(function(){
    let name = 'penne Arrabbiata';
    let qty = parseInt($('#penneArrabbiata-qt').text());;
    let price = 46;//$('#price').val();
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



function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#pistachiopasta').click(function(){
    let name = 'pistachio pasta';
    let qty = parseInt($('#pistachiopasta-qt').text());;
    let price = 46;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#VeganSpaghetti').click(function(){
    let name = 'Vegan Spaghetti';
    let qty = parseInt($('#VeganSpaghetti-qt').text());;
    let price = 46;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#RoastedGarlicPasta').click(function(){
    let name = 'Roasted Garlic Pasta';
    let qty = parseInt($('#RoastedGarlicPasta-qt').text());;
    let price = 46;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#VeganShawarma').click(function(){
    let name = 'vegan shawarma';
    let qty = parseInt($('#VeganShawarma-qt').text());;
    let price = 24;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#ShawarmaRolledChicken').click(function(){
    let name = 'shawarma rolled chicken';
    let qty = parseInt($('#ShawarmaRolledChicken-qt').text());;
    let price = 24;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#ShawarmaRolledmeat').click(function(){
    let name = 'shawarma rolled Meat';
    let qty = parseInt($('#ShawarmaRolledmeat-qt').text());;
    let price = 24;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#lentilShawarma').click(function(){
    let name = 'lentil shawarma';
    let qty = parseInt($('#lentilShawarma-qt').text());;
    let price = 24;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#PizzaPepperoni').click(function(){
    let name = 'pizza pepperoni';
    let qty = parseInt($('#PizzaPepperoni-qt').text());;
    let price = 46;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#PizzaItaliano').click(function(){
    let name = 'pizza italiano';
    let qty = parseInt($('#PizzaItaliano-qt').text());;
    let price = 46;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#PizzaShrimp').click(function(){
    let name = 'shrimp pizza';
    let qty = parseInt($('#PizzaShrimp-qt').text());;
    let price = 46;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#ChickenPizza').click(function(){
    let name = 'chicken pizza';
    let qty = parseInt($('#ChickenPizza-qt').text());;
    let price = 46;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#Pepsi').click(function(){
    let name = 'Pepsi';
    let qty = parseInt($('#Pepsi-qt').text());;
    let price = 6;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#7up').click(function(){
    let name = '7up';
    let qty = parseInt($('#7up-qt').text());;
    let price = 6;//$('#price').val();
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


function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#MangoJuice').click(function(){
    let name = 'mango juice';
    let qty = parseInt($('#MangoJuice-qt').text());;
    let price = 26;//$('#price').val();
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

function Item (name, qty, price)
{
this.name = name;
this.qty = qty;
this.price = price;
}
$('#strowberryJuice').click(function(){
    let name = 'strowberry juice';
    let qty = parseInt($('#strowberryJuice-qt').text());;
    let price = 26;//$('#price').val();
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
//المعادله 
$('#fishBurger-decrease').click(()=>{
    let quantity = parseInt($('#fishBurger-qt').text());
    if(quantity >1){
        $('#fishBurger-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#fishBurger-increase').click(()=>{
    let quantity = parseInt($('#fishBurger-qt').text());
    console.log(quantity);
    $('#fishBurger-qt').text(++quantity)
})

$('#BeefSandwish-decrease').click(()=>{
    let quantity = parseInt($('#BeefSandwich-qt').text());
    if(quantity >1){
        $('#BeefSandwich-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#BeefSandwish-increase').click(()=>{
    let quantity = parseInt($('#BeefSandwich-qt').text());
    console.log(quantity);
    $('#BeefSandwich-qt').text(++quantity)
})

$('#MexicanBurger-decrease').click(()=>{
    let quantity = parseInt($('#MexicanBurger-qt').text());
    if(quantity >1){
        $('#MexicanBurger-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#MexicanBurger-increase').click(()=>{
    let quantity = parseInt($('#MexicanBurger-qt').text());
    console.log(quantity);
    $('#MexicanBurger-qt').text(++quantity)
})

$('#beefBurger-decrease').click(()=>{
    let quantity = parseInt($('#beefBurger-qt').text());
    if(quantity >1){
        $('#beefBurger-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#beefBurger-increase').click(()=>{
    let quantity = parseInt($('#beefBurger-qt').text());
    console.log(quantity);
    $('#beefBurger-qt').text(++quantity)
})


$('#penneArrabbiata-decrease').click(()=>{
    let quantity = parseInt($('#penneArrabbiata-qt').text());
    if(quantity >1){
        $('#penneArrabbiata-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#penneArrabbiata-increase').click(()=>{
    let quantity = parseInt($('#penneArrabbiata-qt').text());
    console.log(quantity);
    $('#penneArrabbiata-qt').text(++quantity)
})

$('#pistachiopasta-decrease').click(()=>{
    let quantity = parseInt($('#pistachiopasta-qt').text());
    if(quantity >1){
        $('#pistachiopasta-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#pistachiopasta-increase').click(()=>{
    let quantity = parseInt($('#pistachiopasta-qt').text());
    console.log(quantity);
    $('#pistachiopasta-qt').text(++quantity)
})

$('#VeganSpaghetti-decrease').click(()=>{
    let quantity = parseInt($('#VeganSpaghetti-qt').text());
    if(quantity >1){
        $('#VeganSpaghetti-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#VeganSpaghetti-increase').click(()=>{
    let quantity = parseInt($('#VeganSpaghetti-qt').text());
    console.log(quantity);
    $('#VeganSpaghetti-qt').text(++quantity)
})


$('#RoastedGarlicPasta-decrease').click(()=>{
    let quantity = parseInt($('#RoastedGarlicPasta-qt').text());
    if(quantity >1){
        $('#RoastedGarlicPasta-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#RoastedGarlicPasta-increase').click(()=>{
    let quantity = parseInt($('#RoastedGarlicPasta-qt').text());
    console.log(quantity);
    $('#RoastedGarlicPasta-qt').text(++quantity)
})

$('#VeganShawarma-decrease').click(()=>{
    let quantity = parseInt($('#VeganShawarma-qt').text());
    if(quantity >1){
        $('#VeganShawarma-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#VeganShawarma-increase').click(()=>{
    let quantity = parseInt($('#VeganShawarma-qt').text());
    console.log(quantity);
    $('#VeganShawarma-qt').text(++quantity)
})


$('#ShawarmaRolledChicken-decrease').click(()=>{
    let quantity = parseInt($('#ShawarmaRolledChicken-qt').text());
    if(quantity >1){
        $('#ShawarmaRolledChicken-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#ShawarmaRolledChicken-increase').click(()=>{
    let quantity = parseInt($('#ShawarmaRolledChicken-qt').text());
    console.log(quantity);
    $('#ShawarmaRolledChicken-qt').text(++quantity)
})

$('#ShawarmaRolledmeat-decrease').click(()=>{
    let quantity = parseInt($('#ShawarmaRolledmeat-qt').text());
    if(quantity >1){
        $('#ShawarmaRolledmeat-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#ShawarmaRolledmeat-increase').click(()=>{
    let quantity = parseInt($('#ShawarmaRolledmeat-qt').text());
    console.log(quantity);
    $('#ShawarmaRolledmeat-qt').text(++quantity)
})

$('#lentilShawarma-decrease').click(()=>{
    let quantity = parseInt($('#lentilShawarma-qt').text());
    if(quantity >1){
        $('#lentilShawarma-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#lentilShawarma-increase').click(()=>{
    let quantity = parseInt($('#lentilShawarma-qt').text());
    console.log(quantity);
    $('#lentilShawarma-qt').text(++quantity)
})

$('#PizzaPepperoni-decrease').click(()=>{
    let quantity = parseInt($('#PizzaPepperoni-qt').text());
    if(quantity >1){
        $('#PizzaPepperoni-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#PizzaPepperoni-increase').click(()=>{
    let quantity = parseInt($('#PizzaPepperoni-qt').text());
    console.log(quantity);
    $('#PizzaPepperoni-qt').text(++quantity)
})

$('#PizzaItaliano-decrease').click(()=>{
    let quantity = parseInt($('#PizzaItaliano-qt').text());
    if(quantity >1){
        $('#PizzaItaliano-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#PizzaItaliano-increase').click(()=>{
    let quantity = parseInt($('#PizzaItaliano-qt').text());
    console.log(quantity);
    $('#PizzaItaliano-qt').text(++quantity)
})

$('#PizzaShrimp-decrease').click(()=>{
    let quantity = parseInt($('#PizzaShrimp-qt').text());
    if(quantity >1){
        $('#PizzaShrimp-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#PizzaShrimp-increase').click(()=>{
    let quantity = parseInt($('#PizzaShrimp-qt').text());
    console.log(quantity);
    $('#PizzaShrimp-qt').text(++quantity)
})

$('#ChickenPizza-decrease').click(()=>{
    let quantity = parseInt($('#ChickenPizza-qt').text());
    if(quantity >1){
        $('#ChickenPizza-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#ChickenPizza-increase').click(()=>{
    let quantity = parseInt($('#ChickenPizza-qt').text());
    console.log(quantity);
    $('#ChickenPizza-qt').text(++quantity)
})

$('#Pepsi-decrease').click(()=>{
    let quantity = parseInt($('#Pepsi-qt').text());
    if(quantity >1){
        $('#Pepsi-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#Pepsi-increase').click(()=>{
    let quantity = parseInt($('#Pepsi-qt').text());
    console.log(quantity);
    $('#Pepsi-qt').text(++quantity)
})


$('#7up-decrease').click(()=>{
    let quantity = parseInt($('#7up-qt').text());
    if(quantity >1){
        $('#7up-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#7up-increase').click(()=>{
    let quantity = parseInt($('#7up-qt').text());
    console.log(quantity);
    $('#7up-qt').text(++quantity)
})

$('#MangoJuice-decrease').click(()=>{
    let quantity = parseInt($('#MangoJuice-qt').text());
    if(quantity >1){
        $('#MangoJuice-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#MangoJuice-increase').click(()=>{
    let quantity = parseInt($('#MangoJuice-qt').text());
    console.log(quantity);
    $('#MangoJuice-qt').text(++quantity)
})


$('#strowberryJuice-decrease').click(()=>{
    let quantity = parseInt($('#strowberryJuice-qt').text());
    if(quantity >1){
        $('#strowberryJuice-qt').text(--quantity)
        
    }
    console.log(quantity);
})

$('#strowberryJuice-increase').click(()=>{
    let quantity = parseInt($('#strowberryJuice-qt').text());
    console.log(quantity);
    $('#strowberryJuice-qt').text(++quantity)
})

$('#Login').click(function(){
window.location.href="menu.html"
})




