<template>
  <section class="src-componentes-resultadosChoice">
    <div class="jumbotron">
      <h1>Resultados Choice</h1>
      <hr />
      <br />

      <div class="table-responsive">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr
            class="bg-info text-white"
            v-for="(pregunta, index) in preguntas"
            :key="index"
          >
            <td>{{ pregunta.numero }}</td>
            <td>{{ pregunta.respuestas }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-resultadosChoice',
    props: [],
    mounted () {

    },
    data () {
      return {
       preguntas : [
         {numero:1, respuestas:['c']},
         {numero:2, respuestas:['c']},
         {numero:3, respuestas:['b']}
       ]
      }
    },
    methods: {
      

    },
    computed: {
     
    }
}


</script>

<style scoped lang="css">
.src-componentes-resultadosChoice {
}

.jumbotron {
  background-color: blue;
  color: white;
}
</style>
