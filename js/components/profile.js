document.addEventListener('DOMContentLoaded', function () {
    window.showEditDialog = function () {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                // Guardar los cambios realizados
                const nameField = document.getElementById('name');
                const emailField = document.getElementById('email');
                const addressField = document.getElementById('address');
                const passwordField = document.getElementById('password');

                const name = nameField.value;
                const email = emailField.value;
                const address = addressField.value;
                const password = passwordField.value;

                // Actualizar la vista con los nuevos valores
                nameField.value = name;
                emailField.value = email;
                addressField.value = address;
                passwordField.value = password;

                Swal.fire('Saved!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    }
});
