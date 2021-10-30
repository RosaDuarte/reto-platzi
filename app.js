new Vue({
    el: '#app',
    
    data () {
      return {
          course: [],
          title: '',
          time:''
      }
    },
    
    computed: {
        totalTime(){
           if(!this.course.length) {
               return 0
           }

           return this.course.reduce((a,b)=> a + parseInt(b.time), 0)
        }
    },
    
    methods: {
        addCourse(){
            let course = {name:this.title, time:this.time}

            this.course.push(course)

            this.title=''
            this.time=''

            console.log(this.course)
        }
    }
  })