# Lab 6 - CRUD de Categorías Bancarias con Firebase

Este proyecto es un CRUD (Crear, Leer, Actualizar, Borrar) de categorías bancarias utilizando **React** y **Firebase Firestore**.

---

## Contenido

* `src/App.js` → Componente principal que integra el CRUD.
* `src/Categories.js` → Componente con el formulario y lista de categorías.
* `src/firebase.js` → Configuración de Firebase.
* `package.json` → Dependencias del proyecto.

---

## 1. Configuración del proyecto

1. Clonar o descargar el repositorio.

   ```bash
   git clone https://github.com/TU-USUARIO/lab6-crud.git
   cd lab6-crud
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar Firebase:

   * Ir a [Firebase Console](https://console.firebase.google.com/)
   * Crear un nuevo proyecto
   * Activar **Firestore Database** en modo prueba
   * Copiar la configuración del SDK (apiKey, projectId, etc.)
   * Reemplazar los valores en `src/firebase.js`

---

## 2. Estructura de Firebase

La colección principal es `categories`, con los siguientes campos:

* `id` (generado automáticamente)
* `name` (string, obligatorio)
* `description` (string, opcional)
* `created_at` (timestamp, automático)

---

## 3. Uso del CRUD

* **Crear**: llenar el formulario y hacer clic en "Create".
* **Leer**: la lista se actualiza automáticamente mostrando todas las categorías.
* **Actualizar**: hacer clic en "Edit", modificar los campos y luego "Update".
* **Eliminar**: hacer clic en "Delete" junto a la categoría correspondiente.

Ejemplos de categorías de prueba:

| Name               | Description                            |
| ------------------ | -------------------------------------- |
| Checking Account   | Cuenta corriente estándar              |
| Savings Account    | Cuenta de ahorro con interés           |
| Credit Card        | Cashback y puntos de recompensa        |
| Personal Loan      | Préstamos personales a corto plazo     |
| Mortgage           | Créditos hipotecarios                  |
| Investment Account | Cuentas de inversión (acciones, bonos) |

---

## 4. Correr la aplicación localmente

```bash
npm start
```

* Abrir [http://localhost:3000](http://localhost:3000)
* Probar el CRUD en tiempo real

---

## 5. Flujo de Git

1. Inicializar repositorio (solo si no lo has hecho):

   ```bash
   git init
   git add .
   git commit -m "Versión inicial del Lab 6 CRUD"
   ```

2. Crear branch principal:

   ```bash
   git branch -M main
   ```

3. Conectar con GitHub:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/lab6-crud.git
   ```

4. Subir cambios:

   ```bash
   git push -u origin main
   ```

* Para cambios posteriores:

  ```bash
  git add .
  git commit -m "Descripción de los cambios"
  git push
  ```

---

## 6. Notas

* La app no requiere backend propio: todo se maneja con **Firebase Firestore**.
* Se puede cambiar el tema de las categorías a otros contextos bancarios, financieros o empresariales según la necesidad.
