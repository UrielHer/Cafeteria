const app = new Vue({
  el: ".app",
  data: {
    vue1: {
      cafes: 0,
    },
    cafe1: {
        Nombre: 'Café',
        Descripción: 'Americano',
        Precio: 18,
        Disponible: 'si',
    },
    cafe2: {
        Nombre: 'Jugo',
        Descripción: 'Naranja',
        Precio: 15,
        Disponible: 'Sí',
    },
    cafe3: {
        Nombre: 'Limonada',
        Descripción: 'Con gas o sin gas',
        Precio: 15,
        Disponible: 'Sí',
    },
    cafe4: {
        Nombre: 'Galletas',
        Descripción: 'Chispas de chocolate',
        Precio: 20,
        Disponible: 'Sí',
    },
    cafe5: {
        Nombre: 'pan',
        Descripción: 'De muerto',
        Precio: 10,
        Disponible: 'Sí',
    },
    cafe6: {
        Nombre: 'Churros',
        Descripción: 'Rellenos',
        Precio: 15,
        Disponible: 'si',
    },
  },
});
const app2 = new Vue({
  el: ".app2",
  data: {
    vue2: {
      precior: 0,
    },
    cafe1: {
        Nombre: 'Café',
        Descripción: 'Americano',
        Precio: 18,
        Disponible: 'si',
    },
    cafe2: {
        Nombre: 'Jugo',
        Descripción: 'Naranja',
        Precio: 15,
        Disponible: 'Sí',
    },
    cafe3: {
        Nombre: 'Limonada',
        Descripción: 'Con gas o sin gas',
        Precio: 15,
        Disponible: 'Sí',
    },
    cafe4: {
        Nombre: 'Galletas',
        Descripción: 'Chispas de chocolate',
        Precio: 20,
        Disponible: 'Sí',
    },
    cafe5: {
        Nombre: 'pan',
        Descripción: 'De muerto',
        Precio: 10,
        Disponible: 'Sí',
    },
    cafe6: {
        Nombre: 'Churros',
        Descripción: 'Rellenos',
        Precio: 15,
        Disponible: 'si',
    },
  },
});
const app3 = new Vue({
  el: ".app3",
  data: {
    vue3: {
      cantidad: 0,
      total: 0,
      lista: 0,
      producto: "gg",
      precios: 0,
      pro: 0,
    },
    pedido:[],
    cafe1: {
        Nombre: 'Café',
        Precio: 18,
        Disponible: 'Si',
    },
    cafe2: {
        Nombre: 'Jugo',
        Precio: 15,
        Disponible: 'Sí',
    },
    cafe3: {
        Nombre: 'Limonada',
        Precio: 15,
        Disponible: 'Sí',
    },
    cafe4: {
        Nombre: 'Galletas',
        Precio: 20,
        Disponible: 'Sí',
    },
    cafe5: {
        Nombre: 'pan',
        Precio: 10,
        Disponible: 'Sí',
    },
    cafe6: {
        Nombre: 'Churros',
        Precio: 15,
        Disponible: 'Sí',
    },
  },
  methods: {
    agregar: function (vius) {

      this.vue3.pro++;

      switch(vius){
        case 1:
          this.vue3.producto = this.cafe1.Nombre;
          this.vue3.precios = this.cafe1.Precio;
        break;
        case 2:
          this.vue3.producto = this.cafe2.Nombre;
          this.vue3.precios = this.cafe2.Precio;
        break;
        case 3:
          this.vue3.producto = this.cafe3.Nombre;
          this.vue3.precios = this.cafe3.Precio;
        break;
        case 4:
          this.vue3.producto = this.cafe4.Nombre;
          this.vue3.precios = this.cafe4.Precio;
        break;
        case 5:
          this.vue3.producto = this.cafe5.Nombre;
          this.vue3.precios = this.cafe5.Precio;
        break;
        case 6:
          this.vue3.producto = this.cafe6.Nombre;
          this.vue3.precios = this.cafe6.Precio;
        break;
      }

      this.pedido.push({mensaje: 'Producto: ' + this.vue3.producto + ' | Precio: $' + this.vue3.precios});
    },
    quitar: function (vius) {

      this.vue3.pro--;

      this.pedido.pop();
    },
  }
});
const app4 = new Vue({
    el:".app4",
    data: {
        mensaje: new Date().toLocaleString(), 
    },
});