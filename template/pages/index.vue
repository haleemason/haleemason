<template>
<main role="main">

  <section class="w-100 bg-dark text-center popup-window">
    <i class="fas fa-times text-white"></i>
    <div class="container">
      <h1 class="text-white">Glance</h1>
      <h2><i class="fab fa-github text-white"></i></h2>
    </div>
  </section>

  <section class="container">
    <article class="jumbotron bg-white text-center" style="height:700px; margin-top: 30vh">
      <h1 class="jumbotron-heading">Ryan Mason</h1>
      <p class="lead text-muted">
        I Graduated from Rochester Institute of Technology with my Bachelors in Information Technology. Using my knowledge of web development my goal is to provide a product that is clean, easily maintainable and to give the audience exactly what they need.
      </p>
      <p>
        <a href="#" class="btn btn-primary m-2">Main call to action</a>
        <a href="#" class="btn btn-secondary m-2">Secondary action</a>
      </p>
    </article>
    <article class="row py-5">
      <div class=" col-lg-4 col-md-6 col-sm-12" v-for="(proj, index) in projects">
        <project :project="proj" :index="index" />
      </div>
    </article>
    <hr>
    <article class="row py-5 container">``
      <div class="py-2" v-for="(event, index) in timeline" :id="`timeline${index}`">
        <h3>{{event.title}} <span class="lead text-muted"> {{event.date}}</span></h3>
        <p class="lead text-muted">
          {{event.description}}
        </p>
      </div>
    </article>
    <article class="row py-5">
      <p class="lead text-muted">
        Skills with programming, documenting, testing, and bug fixing to produce the cleanest code. proficient with a wide variety of web development frameworks.
      </p>
    </article>
  </section>

</main>
</template>

<script>
import project from '~/components/project.vue';


export default {
  components: {
    project
  },
  data() {
    return {
      timeline: [{
          title: 'Software Engineer',
          description: `Working at 221b  specializing in rapid incrimental prototyping, giving our clients beautiful software written using universally-agreed-upon best practices, and utilizing constant user-testing along the way to make sure we're always hitting the bullseye.`,
          date: '2018 - Current',
        },
        {
          title: 'Junior Software Engineer',
          description: `Working at the Center for Open Science on the Labs team using rapid incremental prototyping to create experimental products.`,
          date: '2017 - 2018',
        },
        {
          title: 'Developer Intern',
          description: `Worked at the Center for Open Science on developing web applications, collaborating with teams of developers, working with Ember.js, and Django REST API frameworks.`,
          date: '2016 - 2017',
        },
        {
          title: 'Lab Technician',
          description: `Worked at the College of Imaging Arts and Sciences providing technical support, maintaining, fixing, upgrading computers, and providing end user support for computer labs on the Rochester Institute of Technology campus.`,
          date: '2016 - 2016',
        },
        {
          title: 'Assistant System Administrator',
          description: `Worked at the College of Science providing technical support for faculty and staff at Rochester Institute of Technology. Performed backup, restore, upgrades, and software installations for Mac and Windows computers.`,
          date: '2015 - 2016',
        },
        {
          title: 'Rochester Institute Of Technology',
          description: `Received my BS in Information Technology with an immersion in web and mobile design with a concentration in communications.`,
          date: '2013 - 2017',
        }
      ],
      projects: [{
          title: 'Glance',
          description: 'Glance is a solution for use with Fitbit devices to view your blood glucose levels along with a variety of other health stats on the watch face. You can see your stats at a glance!',
          technologys: [{
            name: 'Fitbit Studio',
            color: '#00B0B9'
          }, ],
          images: [{
            url: 'https://image.ibb.co/d4JNKd/ionic_and_versa.png',
            active: 'active',
          }, ],
          date: 'Ongoing'
        },
        {
          title: 'Public Access Submission System',
          description: 'The Public Access Submission System (PASS) is a platform to assist researchers in complying with the access policies of their funders and institutions.',
          technologys: [{
              name: 'Ember',
              color: '#E04E39'
            },
            {
              name: 'Fadora',
              color: '#c7353c'
            },
          ],
          images: [{
              url: 'https://image.ibb.co/efq6Mo/pass_ui.png',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/emdqE8/image1.png',
              active: '',
            },
          ],
          date: '6-30-18'
        },
        {
          title: 'Broken Sticks Hockey',
          description: 'Broken Sticks Hockey was created to bring a great pick-up hockey experience to the Buffalo, NY area.',
          technologys: [{
            name: 'HTML',
            color: '#e44d26'
          }, ],
          images: [{
              url: 'https://image.ibb.co/ergcu8/Screen_Shot_2018_07_10_at_2_52_44_AM.png',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/f3481o/Screen_Shot_2018_07_10_at_2_54_08_AM.png',
              active: '',
            }
          ],
          date: '3-08-18'
        },
        {
          title: 'OSF Pages',
          description: 'OSF Pages is an Open Science Framework (OSF) addon and website builder that helps OSF users build beautiful websites very quickly using their existing project details.',
          technologys: [{
            name: 'Ember',
            color: '#E04E39'
          }, ],
          images: [{
              url: 'https://image.ibb.co/hok97T/Screen_Shot_2018_07_10_at_3_04_00_AM.png',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/haWP7T/Screen_Shot_2018_07_10_at_3_09_16_AM.png',
              active: '',
            }
          ],
          date: '2-01-18'
        },
      ]
    };
  }
}
</script>

<style>
.popup-window {
  height: 100vh;
  position: fixed;
  top:0;
  z-index:25;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
