module.exports = {
    apps: [
      {
        name: "nestjs-app",
        script: "dist/main.js",
        instances: "max", // Usa todos los núcleos disponibles
        exec_mode: "cluster", // Cluster mode para escalabilidad
        autorestart: true, // Reinicio automático si falla
        watch: false, // No observar cambios en archivos dentro del contenedor
        max_memory_restart: "300M", // Reiniciar si el uso de RAM supera 300MB
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  