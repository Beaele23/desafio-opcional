<template>
  <div id="app" class="py-5">
    <header>
      <h1 class="text-center">Galeria de productos</h1>
    </header>

    <main class="container py-5">

      <section class="row justify-content-center g-3">

        <div class="col-12 col-md-6 col-lg-4" v-for="producto in productos" :key="producto.id">
          <div class="card">
          <img :src="producto.pathImg" class="card-img-top" :alt="producto.nombre" />
          <div class="card-body">
              <h5 class="card-title">{{producto.nombre}}</h5>
              <p class="card-text">
                 {{producto.descripcionCorta}}
              </p>

              <div>
                  <button
                      class="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#miModal"
                      :data-producto-id="producto.id"
                      @click="mostrar"
                  >
                      Ver detalles
                  </button>
              </div>
          </div>
        </div>
        </div>
      </section>

    </main>
    

      <!-- Modal -->
      <div
          class="modal fade"
          id="miModal"
          tabindex="-1"
          aria-labelledby="miModalLabel"
          aria-hidden="true"
      >
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="miModalLabel">
                          {{ currentProducto.nombre }}
                      </h1>
                      <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                      ></button>
                  </div>
                  <div class="modal-body">
                    <img :src="currentProducto.pathImg" :alt="currentProducto.nombre" width="100">
                      <p>
                          <span>Descripción: </span
                          >{{ currentProducto.descripcionLarga }}
                      </p>
                  </div>
                  <div class="modal-footer">
                      <button
                          type="button"
                          class="btn"
                          data-bs-dismiss="modal"
                      >
                          Close
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
      return {
          productos: [
              {
                  id: 1,
                  nombre: "Producto 1",
                  descripcionCorta: "Descripción 1",
                  pathImg: "./assets/img/producto1.png",
                  descripcionLarga: "Producto presentación 1, marca x"
              },
              {
                  id: 2,
                  nombre: "Producto 2",
                  descripcionCorta: "Descripción 2",
                  pathImg: "./assets/img/producto2.jpeg",
                  descripcionLarga: "Producto presentación 2, marca x"
              },
              {
                  id: 3,
                  nombre: "Producto 3",
                  descripcionCorta: "Descripción 3",
                  pathImg: "./assets/img/producto3.png",
                  descripcionLarga: "Producto presentación 3, marca x"
              },
              
          ],
          currentProducto: {},
      };
  },
  methods: {
      mostrar: function (event) {
          let element = event.target;
          let productoId = element.dataset.productoId;

          //buscar elemento dentro del array de productos
          let foundProducto = this.productos.find(
              (producto) => producto.id == productoId
          );

          if (foundProducto) {
              this.currentProducto = foundProducto;
          } else {
              alert("Producto no encontrado.");
          }
      },
  },
};
</script>

<style>
.btn{
    background-color:rgb(129, 126, 129)
}
body{
    font-family: "Caveat", cursive;
}
</style>
