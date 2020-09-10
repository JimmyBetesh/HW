$('form').submit((e)=>{
e.preventDefault();
    const name = $("#name").val();
    const address = $("input[type=text][name=address]").val();
    console.log(name)
    const nameHeader = $('h1').text();
    const addressHeader = $('h2').text();
    $('h1').text(nameHeader + " " + name);
    $('h2').text(addressHeader + " " + address);
}
)

$('#enable').click(()=>{
    $('button').attr('disabled',false);
})