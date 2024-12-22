<script>
  document.addEventListener("DOMContentLoaded", function () {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      document.body.style.backgroundColor = "#0a0a1a"; // Contoh perubahan warna untuk ponsel
    } else if (screenWidth <= 768) {
      document.body.style.backgroundColor = "#020211"; // Tablet
    } else {
      document.body.style.backgroundColor = "#01010f"; // Desktop
    }
  });
</script>
