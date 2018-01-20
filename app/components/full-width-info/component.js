import Ember from 'ember';

let data = [  
   {  
      "websiteTitle":"OSFPages",
      "websiteDescription":"OSFPages is an Open Science Framework (OSF) add-on and website builder that helps OSF users build beautiful websites very quickly using their existing project details. OSF Pages doesn't need additional hosting or management, and it's free and open source.",
      "git":"https://github.com/Rytiggy/osfpages",
      "url":"https://cos-labs.github.io/osfpages/",
      "websiteURL":[  
         "https://image.ibb.co/g3x8cR/Screen_Shot_2018_01_17_at_11_23_07_PM.png",
         "https://image.ibb.co/hF89j6/Screen_Shot_2018_01_17_at_11_36_54_PM.png",
         "https://image.ibb.co/gtSGxR/Screen_Shot_2018_01_17_at_11_45_47_PM.png"
      ]
   },
   {  
      "websiteTitle":"OSFCollections",
      "websiteDescription":"Collections is a prototype project at the Center for Open Science. This project is experimental, scope, technologies, code and functionality may change. This app has two main parts. The service stores data about the collection, and the client lets users interact with their collections.",
      "git":"https://github.com/cos-labs/collections",
      "websiteURL":[  
         "https://image.ibb.co/hkwjHR/Screen_Shot_2018_01_18_at_12_14_07_AM.png",
         "https://image.ibb.co/kwWZHR/Screen_Shot_2018_01_18_at_12_14_55_AM.png",
         "https://image.ibb.co/kSr1xR/Screen_Shot_2018_01_18_at_12_15_04_AM.png",
         "https://image.ibb.co/cDFGWm/Screen_Shot_2018_01_18_at_12_15_11_AM.png",
         "https://image.ibb.co/ckrZHR/Screen_Shot_2018_01_18_at_12_15_29_AM.png",
         "https://image.ibb.co/feiaP6/Screen_Shot_2018_01_18_at_12_15_37_AM.png"
      ]
   },
   // {  
   //    "websiteTitle":"Overfeed Salt",
   //    "websiteDescription":"Overturned Salt is a food blog that was a clients request to build a website with the ability to post, edit, delete, moderate and comment.",
   //    "websiteURL":[  
   //       "https://image.ibb.co/nuJDcR/Screen_Shot_2018_01_18_at_10_16_00_AM.png"
   //    ]
   // },
   {  
      "websiteTitle":"The Course Assessment Tool",
      "websiteDescription":"The Course Assessment Tool was my senior development project at Rochester Institute of Technology (RIT) where my team and I developed a system that handled assessment of courses at RIT, allowing administration to set up classes and faculty to enter the grades from that semester in order to generate reports and statistics for the year.",
      "git":"https://github.com/Rytiggy/knuth-sen-dev",
      "websiteURL":[  
         "https://image.ibb.co/c7GbxR/Screen_Shot_2018_01_18_at_12.png",
         "https://image.ibb.co/kPWqrm/Screen_Shot_2018_01_18_at_121.png",
         "https://image.ibb.co/gqOj1m/Screen_Shot_2018_01_18_at_1214.png",
         "https://image.ibb.co/cetOu6/Screen_Shot_2018_01_18_at_1213.png",
         "https://image.ibb.co/mUxYu6/Screen_Shot_2018_01_18_at_1215.png"
      ]
   }
]

export default Ember.Component.extend({
	classNames:'col',
	websiteJSON:data,
	showLicense:false,
	showEmail:false,
	email:"Contact Me",
	actions: {
		toggleLicense(){
			this.toggleProperty('showLicense');
		},
		toggleEmail(){
			this.toggleProperty('showEmail');
			if(this.get('showEmail')){
				this.set('email', "<input style='border: solid transparent;font-size: 16px;padding: 8px; background:#5c9cec;color: #e6e9ee;' value='ryanmasonjar@gmail.com'></input>")
			}
		}
	}
});
