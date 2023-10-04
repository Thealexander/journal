<template>
  <div
    class="entry-container mb-3 pointer p-2"
 
    @click="$router.push({ name: 'entry-view', params: { id:entry.id } })"
  >
    <!--TITULO en la linea 5 mi puto error de mierda que me costo la fucking noche jajaja puto ciego!-->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5 fw-bold">{{months}}</span>
      <span class="mx-2 fs-5 fw-light">{{yearDay}}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed:{
    shortText(){
      return (this.entry.text.legnth >130)
      ? this.entry.text.substring(0,130)+ '...'
      : this.entry.text
    },
    day(){
      const date = new Date(this.entry.date)
      //console.log(date)
      return date.getDate()
    },
    months(){
      const date = new Date(this.entry.date)
       return months[date.getMonth()]
    },
    yearDay(){
      const date = new Date(this.entry.date)
      return `${date.getFullYear()}, ${days[date.getDay()]}`
    }
  }
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>