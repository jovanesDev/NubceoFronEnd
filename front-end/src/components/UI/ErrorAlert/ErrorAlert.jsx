import Swal from "sweetalert2"

const errorAlert = (text) => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${text}`,
      })
}

export default errorAlert;