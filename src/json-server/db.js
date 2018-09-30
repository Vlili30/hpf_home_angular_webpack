// index.js
var exports = module.exports = {};

exports.generateData = function() {

  const data = {
      users: [],
      structure : [],
      networks : [],
      stream : [],
      pollVote:[]
  }
  // Create users
  for (let i = 0; i < 10; i++) {
    data.users.push({ id: i, name: `user${i}` });
  }

  // Create strctures
  for (let i = 0; i < 5; i++) {
    data.structure.push(
        {
            id: i,
            label: `category${i} label`,
            description: `category${i} description`,
            optionNbNetworkVisible: '2',
            allVisible: false,
            networks:[]
        }
    );

    for (let j = 0; j < 5; j++) {

        data.structure[i].networks.push(
            {
                id: parseInt("" + i + j),
                picture:[],
                articles:[],
                label: `network${j} label tets`,
                isNew : (Math.random() >= 0.5),
                description: `network${j} description`,
                nbEvent: ~~(Math.random() * 10),
                nbPoll : ~~(Math.random() * 10),
                nbDoc : ~~(Math.random() * 10),
                nbComment : ~~(Math.random() * 10),
                viewMode : '',
                requestStatus : ['VALIDATED', 'REQUESTED'][Math.floor(Math.random() * 2)],
                isRequestable : '',
                canManage : '',
                read : ''
            }
        );

        for (let k = 0; k < 5; k++) {
            data.structure[i].networks[j].articles.push(
                {
                    id: parseInt("" + i + j + k),
                    picture:[],
                    label: `article${k} label test`,
                    isNew : (Math.random() >= 0.5),
                    description: `article${k} description`,
                    nbEvent: ~~(Math.random() * 10),
                    nbPoll : ~~(Math.random() * 10),
                    nbDoc : ~~(Math.random() * 10),
                    nbComment : ~~(Math.random() * 10),
                }
            );

        }

        data.networks.push(data.structure[i].networks[j]);

    }

  }

  data.stream = [{
   "id": "1587",
   "label": "6 files have been uploaded in the folder \u0022New Folder\u0022",
   "description": "jhjhjhjhj",
   "group": {
     "id": "7",
     "label": "Agora Forum",
     "access": "MEMBER",
     "category": "MAIN",
     "canParticipate": true,
     "piwikSiteId": "3009",
     "orgId": "572458"
   },
   "startOn": null,
   "endOn": null,
   "startEndOn": {
     "startDate": "",
     "startTime": "",
     "endDate": "",
     "endTime": "",
     "allDay": false,
     "dateString": ""
   },
   "visibility": "PRIVATE",
   "status": "SUBMITTED",
   "createdOn": "2018-09-13T06:18:21+00:00",
   "createdBy": {
     "id": "melliol",
     "firstName": "Olivier",
     "lastName": "MELLINGER",
     "fullName": "Olivier MELLINGER",
     "organisation": "nggh hghghgh"
   },
   "updatedOn": "2018-09-13T06:17:21+00:00",
   "updatedBy": {
     "id": "schelph",
     "firstName": "Philippe",
     "lastName": "SCHELTE",
     "fullName": "Philippe SCHELTE",
     "organisation": "sante dev"
   },
   "ruledOn": null,
   "ruledBy": null,
   "type": "NEWS",
   "forumId": "",
   "lastActivityOn": "2018-09-13T06:33:21+00:00",
   "lastActivityBy": {
     "id": "lisoivi",
     "firstName": "Vincent Christophe",
     "lastName": "LISOIR",
     "fullName": "Vincent christophe LISOIR",
     "organisation": "Sheep goat"
   },
   "location": "",
   "links": [],
   "documents": [],
   "pictures": [],
   "comments": [{
     "id": "296",
     "text": "yeha yeah",
     "postedOn": "24-11-2016 10:11:57",
     "postedBy": {
       "id": "lisoivi",
       "firstName": "Vincent Christophe",
       "lastName": "LISOIR",
       "fullName": "Vincent christophe LISOIR",
       "organisation": "Sheep goat"
     },
     "updatedOn": null,
     "updatedBy": {
       "id": "",
       "firstName": "",
       "lastName": "",
       "fullName": " ",
       "organisation": ""
     },
     "status": "SUBMITTED",
     "postedOnRelative": "24 November 2016",
     "updatedOnRelative": null,
     "isEditable": true,
     "hasVoted": false,
     "votes": {
       "MINUS": 0,
       "PLUS": 0,
       "solde": 0
     },
     "editMode": false,
     "isLeader": false
   }],
   "poll": null,
   "postedOnRelative": "22 November 2016",
   "updatedOnRelative": "17:06",
   "ruledOnRelative": null,
   "lastActivityOnRelative": "24 November 2016",
   "editLink": "\/hpfzf2\/item\/post\/0\/1587",
   "turnpublicLink": null,
   "isEditable": true,
   "isCommentable": true,
   "hasSubscribed": false,
   "hasEndorsed": true,
   "hasAccessToNetwork": true,
   "endorsementCounter": "1",
   "attendants": {},
   "acMeeting": null,
   "acMeetingId": null,
   "acMeetingUrl": null,
   "canAttendToAdobeConnectMeeting": null,
   "originalId": null,
   "pin": "1",
   "isPinnable": true,
   "canCopy": true,
   "canDelete": true,
   "isLeader": false,
   "meetingParticipation": {
     "MAYBE": 0,
     "PARTICIPATE": 0,
     "NOTPARTICIPATE": 0,
     "ownDecision": false,
     "ownInvitationStatus": null
   },
   "meetingInvitationType": "NONE",
   "appearInNewsletter": null
 }, {
   "id": "1719",
   "label": "Nutrition: Tips for Improving Your Health",
   "description": "Good nutrition is one of the keys to a healthy life. You can improve your health by keeping a balanced diet. You should eat foods that contain vitamins and minerals. This includes fruits, vegetables, whole grains, dairy, and a source of protein.\r\n\r\nAsk yourself the following questions. If you answer yes to any of them, talk to your doctor about your health. You may need to improve your eating habits for better nutrition.",
   "group": {
     "id": "7",
     "label": "Agora Forum",
     "access": "MEMBER",
     "category": "MAIN",
     "canParticipate": true,
     "piwikSiteId": "3009",
     "orgId": "572458"
   },
   "startOn": "31-08-2018 00:00",
   "endOn": "03-09-2018 00:00",
   "startEndOn": {
     "startDate": "31-08-2018",
     "startTime": "00:00",
     "endDate": "03-09-2018",
     "endTime": "00:00",
     "allDay": true,
     "startDateParts": {
       "day": "31",
       "month": "Aug"
     },
     "endDateParts": {
       "day": "03",
       "month": "Sep"
     },
     "dateString": "From 31st August to 3rd September 2018"
   },
   "visibility": "PRIVATE",
   "status": "SUBMITTED",
   "createdOn": "2018-09-13T05:17:21+00:00",
   "createdBy": {
     "id": "lisoivi",
     "firstName": "Vincent Christophe",
     "lastName": "LISOIR",
     "fullName": "Vincent christophe LISOIR",
     "organisation": "Sheep goat"
   },
   "updatedOn": "2018-09-13T05:19:21+00:00",
   "updatedBy": {
     "id": "lisoivi",
     "firstName": "Vincent Christophe",
     "lastName": "LISOIR",
     "fullName": "Vincent christophe LISOIR",
     "organisation": "Sheep goat"
   },
   "ruledOn": null,
   "ruledBy": null,
   "type": "EVENT",
   "forumId": "",
   "lastActivityOn": "2018-09-13T05:22:21+00:00",
   "lastActivityBy": {
     "id": "",
     "firstName": "",
     "lastName": "",
     "fullName": " ",
     "organisation": ""
   },
   "location": "Brussels",
   "links": [{
     "id": "1714",
     "label": "http:\/\/www.9gag.com",
     "link": "http:\/\/www.9gag.com",
     "createdOn": "29-08-2018 16:15:55",
     "createdBy": {
       "fullName": "Vincent christophe LISOIR"
     }
   }, {
     "id": "1713",
     "label": "http:\/\/www.google.be",
     "link": "http:\/\/www.google.be",
     "createdOn": "29-08-2018 16:15:35",
     "createdBy": {
       "fullName": "Vincent christophe LISOIR"
     }
   }],
   "documents": [{
     "id": "1687",
     "label": "Agenda_subgroup date marking.pdf",
     "createdBy": {
       "id": "schelph",
       "fullname": "Philippe SCHELTE"
     },
     "linkedBy": {
       "fullname": "Vincent Christophe LISOIR"
     },
     "createdOn": "29-08-2018 10:06:00",
     "linkedOn": "29-08-2018 16:26:11",
     "isLinkedByOwner": false,
     "version": "0.00",
     "nbVersion": "1",
     "itemId": "1719"
   }, {
     "id": "1694",
     "label": "Agenda_subgroup date marking.pdf",
     "createdBy": {
       "id": "schelph",
       "fullname": "Philippe SCHELTE"
     },
     "linkedBy": {
       "fullname": "Vincent Christophe LISOIR"
     },
     "createdOn": "29-08-2018 10:16:16",
     "linkedOn": "29-08-2018 16:26:11",
     "isLinkedByOwner": false,
     "version": "0.00",
     "nbVersion": "1",
     "itemId": "1719"
   }, {
     "id": "1712",
     "label": "Privacy_Statement.pdf",
     "createdBy": {
       "id": "lisoivi",
       "fullname": "Vincent Christophe LISOIR"
     },
     "linkedBy": {
       "fullname": "Vincent Christophe LISOIR"
     },
     "createdOn": "29-08-2018 16:14:55",
     "linkedOn": "29-08-2018 16:26:11",
     "isLinkedByOwner": true,
     "version": "0.00",
     "nbVersion": "1",
     "itemId": "1719"
   }],
   "pictures": [{
     "id": "1715",
     "label": "GRD DEV is dead",
     "content":"https://picsum.photos/500/300"
   }, {
     "id": "1718",
     "label": ""
   }],
   "comments": [],
   "poll": {
     "id": "521",
     "title": "Path to improved health",
     "itemId": "1719",
     "type": "SINGLE",
     "dateEnd": "06-09-2018 16:21",
     "showResult": "RESULT_ALWAYS",
     "choices": [{
       "id": "501",
       "pollId": "521",
       "label": "Find the strong and weak points in your current diet",
       "position": "0",
       "votes": "0"
     }, {
       "id": "502",
       "pollId": "521",
       "label": "Keep track of your food intake by writing down what you eat and drink every day",
       "position": "1",
       "votes": "0"
     }, {
       "id": "503",
       "pollId": "521",
       "label": "Think about asking for help from a dietitian",
       "position": "2",
       "votes": "0"
     }],
     "votes": "0",
     "visible": true,
     "votable": true,
     "editable": true,
     "status": true,
     "delete": false
   },
   "postedOnRelative": "16:26",
   "updatedOnRelative": "16:26",
   "ruledOnRelative": null,
   "lastActivityOnRelative": "16:26",
   "editLink": "\/hpfzf2\/item\/post\/0\/1719",
   "turnpublicLink": null,
   "isEditable": true,
   "isCommentable": true,
   "hasSubscribed": false,
   "hasEndorsed": false,
   "hasAccessToNetwork": true,
   "endorsementCounter": "0",
   "attendants": {},
   "acMeeting": null,
   "acMeetingId": null,
   "acMeetingUrl": null,
   "canAttendToAdobeConnectMeeting": null,
   "originalId": null,
   "pin": "0",
   "isPinnable": true,
   "canCopy": true,
   "canDelete": true,
   "isLeader": false,
   "meetingParticipation": {
     "MAYBE": 0,
     "PARTICIPATE": 0,
     "NOTPARTICIPATE": 0,
     "": "10",
     "ownDecision": {
       "MA_USER_ID": "lisoivi",
       "MA_EVENT_ID": "1719",
       "MA_NOTIFIED_ON": null,
       "MA_QUALITY": "NOT_INVITED",
       "MA_PARTICIPATION": null,
       "MA_SAVED_ON": "29-AUG-18 04.26.10.000000 PM"
     },
     "ownInvitationStatus": "NOT_INVITED"
   },
   "meetingInvitationType": "RESTRICTED",
   "appearInNewsletter": null
 }];

 // for (let item of data.stream ) {
 //     if(item.poll){
 //         let vote = {};
 //         vote.id = item.poll.id;
 //         data.vote.push(vote);
 //     }
 // }

  return data;
}
