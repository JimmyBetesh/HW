(function () {
    'use strict';
    const formText = $('#formText');
    $('#load').click((e) => {
        e.preventDefault();
        $('img').show();
        formText.text('');
        
            let url = $('#info').val();

            fetch(url)
                .then(r => {
                    $('img').hide();
                    console.log(r);
                    if (!r.ok) {
                        throw new Error(`${r.status} ${r.statusText}`);
                    }
                    return r.text();
                })
                .then(text => formText.append(text))
                .catch(e => formText.append("We've got an error!", e))



        });
      
}());