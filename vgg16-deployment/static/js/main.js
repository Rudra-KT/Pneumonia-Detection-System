$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();
    $('#probability').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        $('#probability').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
        success: function (response) {
            // Get and display the result
            $('.loader').hide();
            $('#result').fadeIn(600);
            $('#probability').fadeIn(600);
            $('#result').text('Result: ' + response[0]);
            $('#probability').text(response[1]);
            // Trim the data string to remove whitespace
            var prediction = response[0].trim();
            if (prediction === 'Affected By PNEUMONIA') {
                // Change background color to red
                $('body').css('background', 'linear-gradient(to right, red, orange)');
            } else if (prediction === 'Result is Normal') {
                // Reset background color
                $('body').css('background', 'linear-gradient(to right, #C6EBC5, #A5DD9B)');
            }
            console.log('Success!');
        }
        });
    });

});
