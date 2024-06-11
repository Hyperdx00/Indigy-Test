function openForm() {
    document.getElementById('employeeForm').style.display = 'flex';
  }

  function closeForm() {
    document.getElementById('employeeForm').style.display = 'none';
    document.getElementById('deletionForm').style.display = 'none';
  }

  function confirmDelete() {
    document.getElementById('deletionForm').style.display = 'flex';
      // Delete the employee
  }
