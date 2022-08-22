// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import swal from 'sweetalert';
//--------------------------------------------------------------------------------------------------------------------

const button = document.getElementById("demo");
button.addEventListener("click", myFunction);

function myFunction() {
    swal("Good job!", "You clicked the button!", "success");
}
