
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
        formData: this.getInicialData(),
        formState: {},
        nombreLengthMin: 3,
        nombreLengthMax: 15,
        apellidoLengthMin: 3,
        apellidoLengthMax: 15,
        notaMin: 0,
        notaMax: 10,
        alumnos: [],
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
     getInicialData(){
      return {
        nombre: "",
        apellido:"",
        nota:"",
      }
      
    },

     enviar() {
      console.log({...this.formData})
      this.alumnos.push({...this.formData})
      this.formData=this.getInicialData()
      this.formState._reset()
    },

    resultado(calificacion){
      this.nota = calificacion
      if (this.nota<=3){
        return [
          'text-danger'
        ] 
      }
      else if (this.nota>3 && this.nota<7){
        return [
          'text-warning'
        ]
      }
      else {
         return [
          'text-success'
        ]
      }
    },
    calcularProm() {
      let suma = 0;
      this.alumnos.forEach(alumno =>{
        suma += alumno.nota;
      });
      return (suma / this.alumnos.length)
    } 

    
  }
  
}


