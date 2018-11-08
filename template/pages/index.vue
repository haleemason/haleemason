<template>
<main role="main">
  <section class="container">
    <article class="jumbotron bg-white text-center" style="height:700px; margin-top: 30vh">
      <h1 class="jumbotron-heading mb-0 pb-0">Ryan Mason</h1>
      <div><small class="badge badge-primary mb-2 text-white">ryanmasonjar@gmail.com</small></div>
      <p class="lead text-muted">
        I Graduated from Rochester Institute of Technology with my Bachelors in Information Technology. While there I grew to love web design and development. Skilled with programming, documenting, testing, and bug fixing to produce the cleanest code. Proficient with a wide variety of web development frameworks. Always expanding my knowledge of user experience and interface design.
      </p>
      <p class="lead">
        <h2 class="text-muted">
          <a href="https://github.com/Rytiggy/" target="_blank"><i class="fab fa-github m-2 text-dark"></i></a>
          <a href="https://www.linkedin.com/in/ryanmichaelmason/" target="_blank"><i class="fab fa-linkedin-in m-2" style="color:#0077b5"></i></a>
          <a href="mailto:ryanmasonjar@gmail.com"><i class="fas fa-at m-2" style="color:#dc493d"></i></a>
        </h2>
        <!-- <a href="/images/myw3schoolsimage.jpg" download>Download Resume</a> -->
      </p>
    </article>
    <h2 class="text-center">Projects</h2>
    <hr class="mb-3">
    <article class="row py-5">
      <div class=" col-lg-4 col-md-6 col-sm-12" v-for="(proj, index) in projects" :key="index">
        <project :project="proj" :index="index" />
      </div>
    </article>
    <h2 class="text-center">Timeline</h2>
    <hr>
    <article class="row py-5 container">
      <div class="py-2 d-inline" v-for="(event, index) in timeline" :id="`timeline${index}`" :key="index">
        <h3 class="mb-0">{{event.title}}</h3>
        <div class="lead text-muted"> {{event.date}}</div>
        <a :href="company.url" target="_blank" class="badge badge-primary mb-1" v-for="(company, i) in event.compaies" :style="`background:${company.color}`" :key="i">{{company.name}}</a>
        <p class="lead text-muted" v-html="event.description"></p>
      </div>
    </article>
    <!-- <h2 class="text-center">Testimonials</h2>
    <hr>
    <article class="row py-5 justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="card m-1">
          <div class="card-body">
            <h5 class="card-title m-0 mb-1">{{testimonial.name}}</h5>
            <p class="card-text mb-1"><i>{{testimonial.quote}}</i></p>
            <span target="_blank" class="badge badge-primary" :style="`background:${context.color}`" v-for="(context, i) in testimonial.context" :key="i">{{context.title}}</span>
          </div>
        </div>
      </div>
    </article> -->
    <article class="row py-5">
      <!-- <p class="lead text-muted">
        Skills with programming, documenting, testing, and bug fixing to produce the cleanest code. proficient with a wide variety of web development frameworks. UX UI
      </p>
      <p>
        <a href="#" class="btn btn-primary m-2">Main call to action</a>
        <a href="#" class="btn btn-secondary m-2">Secondary action</a>
      </p> -->
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
      testimonials: [
        {
          name: 'Janet Wilson',
          quote: 'Yes it worked. Thank you so much for creating this and for you help.',
          context: [
            {
              title: 'Glance',
              color: '#390263',
            },
          ]
        },
        {
          name: 'Kyle Tedesco',
          quote: `Thanks for all your help with this, you've been a lifesaver.`,
          context: [
            {
              title: 'Broken Sticks Hockey',
              color: '#102246',
            },
          ]
        },
      ],
      timeline: [
        {
          title: 'Software Developer',
          description: `Working at <i>221b</i> specializing in rapid incrimental prototyping, giving our clients beautiful software written using universally-agreed-upon best practices, and utilizing constant user-testing along the way to make sure we're always hitting the bullseye.`,
          date: '2018 - Current',
          compaies: [
            {
              name: '221b',
              color: '#0d305a',
              url: 'http://221b.io',
            }
          ],
        },
        {
          title: 'Junior Software Developer',
          description: `Worked at the <i>Center for Open Science</i> on the Labs team using rapid incremental prototyping to create experimental products.`,
          date: '2017 - 2018',
          compaies: [
            {
              name: 'COS',
              color: '#34BAEC',
              url: 'https://cos.io/',
            }
          ],
        },
        {
          title: 'Developer Intern',
          description: `Worked at the <i>Center for Open Science</i> on developing web applications, collaborating with teams of developers, working with Ember.js, and Django REST API frameworks.`,
          date: '2016 - 2017',
          compaies: [
            {
              name: 'COS',
              color: '#34BAEC',
              url: 'https://cos.io/',
            }
          ],
        },
        {
          title: 'Lab Technician',
          description: `Worked at the <i>College of Imaging Arts and Sciences</i> providing technical support, maintaining, fixing, upgrading computers, and providing end user support for computer labs on the Rochester Institute of Technology campus.`,
          date: '2016 - 2016',
          compaies: [
            {
              name: 'RIT ITS',
              color: '#f06d30',
              url: 'https://www.rit.edu/its/services/computer-labs',
            }
          ],
        },
        {
          title: 'Assistant System Administrator',
          description: `Worked at the <i>College of Science</i> providing technical support for faculty and staff at Rochester Institute of Technology. Performed backup, restore, upgrades, and software installations for Mac and Windows computers.`,
          date: '2015 - 2016',
          compaies: [
            {
              name: 'RIT ITS',
              color: '#f06d30',
              url: 'https://www.rit.edu/its/assist-system-administrator',
            }
          ],
        },
        {
          title: 'Rochester Institute Of Technology',
          description: `Received my BS from <i>Rochester Institute Of Technology</i> in Information Technology with an immersion in web and mobile design with a concentration in communications.`,
          date: '2013 - 2017',
          compaies: [
            {
              name: 'RIT',
              color: '#b56422',
              url: 'http://www.rit.edu/',
            }
          ],
        }
      ],
      projects: [
        {
          title: 'Glance',
          description: 'Glance is a solution for use with Fitbit devices to view your blood glucose levels along with a variety of other health stats on the watch face. You can see your stats at a glance!',
          technologys: [{
            name: 'Fitbit SDK',
            color: '#00B0B9'
          }, ],
          images: [{
            url: 'https://image.ibb.co/fbiG9U/versa-Ionic.png',
            active: 'active',
          }, ],
          date: 'Ongoing',
          url: 'https://github.com/Rytiggy/Glance',
        },
        {
          title: 'Talk About',
          description: 'Talk About is a dynamic vue component built to be eaily droped in to any codebase. Commenting made easy!',
          technologys: [
            {
              name: 'Vue',
              color: '#41B883'
            },
            {
              name: 'Nuxt',
              color: '#3b806f'
            },
          ],
          images: [
            {
              url: 'https://image.ibb.co/j58oNT/Screen_Shot_2018_07_12_at_1_31_04_PM.png',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/nLyYp8/Screen_Shot_2018_07_12_at_1_32_34_PM.png',
              active: '',
            },
            {
              url: 'https://image.ibb.co/eVz1bo/Screen_Shot_2018_07_12_at_1_32_24_PM.png',
              active: '',
            },
         ],
          date: '5-2-18',
          url: 'http://talk-about.surge.sh/#/',
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
          date: '6-30-18',
          url: 'https://pass.jhu.edu/',
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
          date: '3-08-18',
          url: 'http://www.brokenstickshockey.com/',
        },
        {
          title: 'OSF Pages',
          description: 'OSF Pages is an Open Science Framework (OSF) addon and website builder that helps OSF users build beautiful websites very quickly using their existing project details.',
          technologys: [
          {
            name: 'Ember',
            color: '#E04E39'
          },
          {
            name: 'Django',
            color: '#152c1f'
          }
        ],
          images: [{
              url: 'https://image.ibb.co/hok97T/Screen_Shot_2018_07_10_at_3_04_00_AM.png',
              active: 'active',
            },
            {
              url: 'https://image.ibb.co/haWP7T/Screen_Shot_2018_07_10_at_3_09_16_AM.png',
              active: '',
            }
          ],
          date: '2-01-18',
          url: 'https://github.com/cos-labs/osfpages',
        },
      ]
    };
  },
}
</script>

<style>
.person {
  width: 100px;
  height: 100px;
}
</style>
