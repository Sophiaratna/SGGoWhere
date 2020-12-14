// curl for f&b within 1000m radius:
// https://tih-api.stb.gov.sg/map/v1/search/multidataset?location=1.2643953%2C103.8186359&radius=1000&dataset=food_beverages&apikey=GU90VyGGLI6njuy2Hago4nT1wEPKCGrY

const sample = {
  status: {
    code: 200,
    message: "OK",
    errorDetail: "",
  },
  data: {
    results: [
      {
        ticketed: "",
        videos: [],
        documents: [],
        officialWebsite: "www.originjourneys.com",
        officialEmail: "booking@originjourneys.com",
        staYear: "",
        businessHour: [
          {
            daily: true,
            openTime: "08:45",
            closeTime: "20:30",
            day: "daily",
            description: "",
            sequenceNumber: 1,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>Harbourfront and Sentosa island with the only cableway that runs into and within Sentosa.<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101d450c6de318448dd97328b850efd129c",
            uuid: "101d450c6de318448dd97328b850efd129c",
            libraryUuid: "1041716072beb964a2b88d24f83e056da72",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101d450c6de318448dd97328b850efd129c",
            uuid: "1012283052c3aca4c5ea7a446a280333b96",
            libraryUuid: "1041716072beb964a2b88d24f83e056da72",
            url: "",
          },
        ],
        uuid: "002d4db02292ccb49e3830a8c771a389a60",
        metadata: {
          createdDate: "2020-12-07T14:49:27Z",
          updatedDate: "2020-12-07T14:49:27Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Kelly Seo",
            authorURL:
              "https://www.google.com/maps/contrib/110942795890174332898/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiX9fL7vQD5hiYy-Ai-yQoNIu6sEoNv1qpUQcjoPA=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            text: "no air con... but now... no much other choice...",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Kamarudin Neo Ibrahim",
            authorURL:
              "https://www.google.com/maps/contrib/118373032430651076576/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjRH5hupm9UXBg2GYKUcDEy1PUoxkuM_TuYIhEUezw=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "A great way to fly! Singapore Cable Car has it's own uniqueness and it's clean. Love the view that takes you away the moment it starts flying. Staffs were helpful and friendly with excellent customer service. Thank you!",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Nadine",
            authorURL:
              "https://www.google.com/maps/contrib/100153045843408119644/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjX6nGZxNtSZZSwJIpQyS8ajPycgdLZh2zlaYTm=s128-c0x00000000-cc-rp-mo-ba2",
            rating: 5,
            text:
              "Absolutely loved it! Its quite an experience to see the west side of this country from top & in the air. It was also a time to rest our feet for a while from the day-long walking. During the night the lights of the ships and the hotels create a unique ambiance nice! Highly recommend",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Peter Ng",
            authorURL:
              "https://www.google.com/maps/contrib/113626434639145587424/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gjy4kSQGHcva7HCLf4FaMemQCJlxTbGmkjXWhR4lg=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            text:
              "A beautiful view from Mount Faber to Sentosa, especially beautiful when it's sunset time. The ride closed a bit too early especially when you're dining at the restaurants. Once you dine after 8pm, you definitely need to call a cab as no empty taxi will go up there.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Maggie C",
            authorURL:
              "https://www.google.com/maps/contrib/105891117476488604403/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiGe0azZGtk-gti9eICuqMzIO2rtJowzQhRmkRS=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "I went to Sentosa Island by the Singapore cable car. This was a wonderful experience. You can see the whole Sentosa Island from the Top, especially Universal Studios (one of the attractions of Sentosa Island). I just love the ride. It is of around 5-7 minutes ride but it's amazing. I would highly recommend the visit once at least. Whenever you get a chance to visit Singapore you must visit there.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.6,
        contact: {
          primaryContactNo: "+6596656292",
          secondaryContactNo: "+6588736500",
        },
        companyDisplayName: "THE TRAVELLER DMC PTE. LTD.",
        pricing: {
          others: "",
        },
        nearestMrtStation: "Harbourfront",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: [
          "Family-friendly",
          "Adventure",
          "Sentosa",
          "Experiences",
          "Attractions",
        ],
        description:
          "Cable Car Take in the amazing aerial views from Faber Peak Singapore at Mount Faber,",
        source: "THE TRAVELLER DMC PTE. LTD.",
        group: "",
        address: {
          block: "",
          streetName: "",
          floorNumber: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "099203",
        },
        name: "Singapore Cable Car ",
        location: {
          latitude: 1.2643953,
          longitude: 103.8186359,
        },
        type: "Adventure",
      },
      {
        ticketed: "",
        videos: [],
        documents: [],
        officialWebsite: "www.nrstuodio.com",
        officialEmail: "info@nrstuodio.com",
        staYear: "",
        businessHour: [
          {
            daily: true,
            openTime: "09:00",
            closeTime: "06:00",
            day: "daily",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "06:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 2,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p>Dress up in Peranakan (Singapore style) KEBAYA of your choice! Choose your accessories(hand bag). Get your hair style done by professional stylist or makeup by makeup artist (optional). Walk around Kampong Gelam Area/Hajilane/Arab street exploring wall arts and architectures. Go out further to explore Singapore’s favorite locations such as Marina Bay and Chinatown. Our shop is located at the central area which is easy to access most tourist locations. We also provide cloak service for visitors.*please bring your Camisoles.(available for purchase onsite)</p><p>Package</p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Traditional Costumes + Accessories $38-$48\n</span></p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Full Package from $$68-$100\n</span></p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Include Hairstyling or with Makeup (Booking required)</span></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101ae34da2bbbb24fbd9d6934e973220b55",
            uuid: "101ae34da2bbbb24fbd9d6934e973220b55",
            libraryUuid: "1046f0ecb530db64b348e3995329d0e088a",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101ae34da2bbbb24fbd9d6934e973220b55",
            uuid: "101d05e0a8483054285a6e3dbf0480ce463",
            libraryUuid: "1046f0ecb530db64b348e3995329d0e088a",
            url: "",
          },
        ],
        uuid: "002451bfcde6fd0452f8f31218899565d03",
        metadata: {
          createdDate: "2020-12-05T00:42:16Z",
          updatedDate: "2020-12-05T00:56:45Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Freddie Johns",
            authorURL:
              "https://www.google.com/maps/contrib/114381449990989699869/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GikhBHFDRiKuuMbhXmFe3FZqoHS-XfUk09SRnIt=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "I bought 2 beautiful kebayas directly from the website. Both arrived in 14 days， delivered by Australia Post as a signature article. Prices quoted are in Singapore dollars so are actually cheaper after currency conversion.\nLittle Nonya also sells through the Etsy website if you prefer a middleman.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Adrian Alphonsus Lee",
            authorURL:
              "https://www.google.com/maps/contrib/114553949463247210933/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgAL9mp2By2GJSUgkMmaSsXW7Hv2EHe4Km-VBaARQ=s128-c0x00000000-cc-rp-mo",
            rating: 4,
            text: "",
            time: "2020-12-11T11:25:15Z",
            language: "",
          },
          {
            authorName: "Elizabeth Tan",
            authorURL:
              "https://www.google.com/maps/contrib/116229504990153216765/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjDfxT1RDhmesCzs5S6QR4OfiXxFr1dofRoMohk-g=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text: "",
            time: "2020-12-11T11:25:15Z",
            language: "",
          },
          {
            authorName: "Han Nguyen",
            authorURL:
              "https://www.google.com/maps/contrib/113093380960818911062/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjGtUGkupi9o2Iq0YWazdQNeNp67prIwLyamn6N=s128-c0x00000000-cc-rp-mo-ba6",
            rating: 3,
            text: "",
            time: "2020-12-11T11:25:15Z",
            language: "",
          },
          {
            authorName: "Hua Zhou",
            authorURL:
              "https://www.google.com/maps/contrib/113415681839877257667/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/-saJZE9z41OA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm2c3c-DoEC0o6yUUCsFvsBlvbkzA/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text: "",
            time: "2020-12-11T11:25:15Z",
            language: "",
          },
        ],
        rating: 4.4,
        contact: {
          primaryContactNo: "+6596805584",
          secondaryContactNo: "+6569708011",
        },
        companyDisplayName: "NR STUODIO & SERVICES",
        pricing: {
          others: "",
        },
        nearestMrtStation: "",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: ["Activities", "Experiences"],
        description: "Bajupura Rental Shop by NR Stuodio",
        source: "NR STUODIO & SERVICES",
        group: "",
        address: {
          block: "86a",
          streetName: "Arab Street",
          floorNumber: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "199782",
        },
        name: "Experience the Traditional Outfit of Peranakan",
        location: {
          latitude: 1.3167871,
          longitude: 103.8417713,
        },
        type: "Others",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.camelotsg.biz",
        officialEmail: "askus@camelotsg.biz",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "tuesday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "wednesday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "friday",
            description: "",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "saturday",
            description: "",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "sunday",
            description: "",
            sequenceNumber: 6,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>Re-opened on 20th October 2020 to promote water sports namely, kayaking &amp; Dragonboating, Lower Seletar Water Sports Centre is now managed by <b>Camelot Pte Ltd.</b></p><p>\nExperience the tranquility and peace with turquoise waters and breeze at Lower Seletar Reservoir Park. Spend your day leisurely paddling on the calm waters of Lower Seletar Reservoir while admiring the beauty of nature. Revel in the glorious resplendence of the basking sun as you explore the idyllic waters. Quickly gather your friends, family and outdoor enthusiasts and come and rent our crafts!<br><br><b>Kayak Rental<br></b>- No minimum to start \n<br>- Available kayaks: Double sit on top &amp; single sit on top<br>- Rental fee includes: Kayak, Paddle &amp; Personal Floatation Device (PFD)<br>- 2 hour rental: $12/pax<br>- Timeslots: 8am - 10am, 10am - 12pm, 12pm - 2pm, 2pm - 4pm, 4pm - 6pm \n \n</p><hr><p>- Online booking form: https://www.picktime.com/CAMELOTLSWSC<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "10199f7f0b4384442bba07677057fda7291",
            uuid: "10199f7f0b4384442bba07677057fda7291",
            libraryUuid: "104d921ddc6476f4faa947dcf7c9d9d7cfe",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "10199f7f0b4384442bba07677057fda7291",
            uuid: "1014bc4b7bcc4de4c59b76fac803f47f74d",
            libraryUuid: "104d921ddc6476f4faa947dcf7c9d9d7cfe",
            url: "",
          },
        ],
        uuid: "0027c45fec8f4d243b3b1d5b42a14967ede",
        metadata: {
          createdDate: "2020-11-27T17:27:48Z",
          updatedDate: "2020-11-27T17:27:48Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Rothermel Simone",
            authorURL:
              "https://www.google.com/maps/contrib/111755129834522416106/reviews",
            profilePhoto:
              "https://lh6.googleusercontent.com/-d47A-f20CZg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckvQShlYQ0KWl0nu9nF5cfQGI4A3w/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 4,
            text:
              "Booked the introductery kayak and started off with rude counter staff regarding the payments and what not.\n\nHowever, the instructor that was showing and guiding us along, whose name is D, made the day better. She was very lively and bubbly. Would love to come back and kayak again with instructors like her.\nOther than that, price is reasonable and the view is spectacular.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Jo Sim",
            authorURL:
              "https://www.google.com/maps/contrib/112046015004651366491/reviews",
            profilePhoto:
              "https://lh5.googleusercontent.com/-zvu0ezSLHpk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucljv445RbBBOwai9rlSU5Wfsz3Yvw/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "Great kayaking venue and value for money with newly open discount . Staff were very friendly and informative. They also abide strictly to covid safety measures with safe distancing/capacity in venue..Great getaway activity for the weekend!",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Muhd Azharin",
            authorURL:
              "https://www.google.com/maps/contrib/116632004981992265233/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgMZ3oNsxWY7MyJRI4pZAr4kj8EKUBW6ZlR6gss=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "Nestled in the lesser known part of Yishun but seen by many, Lower Seletar Water Sports Centre allows citizens to appreciate the reservior's serenity and beauty.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Muhammad Hairi",
            authorURL:
              "https://www.google.com/maps/contrib/112732776903262211810/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgOnT0dCJl7qy8SqSoykmgWyuYJT6ozksDzMppGIA=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text: "",
            time: "2020-12-11T11:25:15Z",
            language: "",
          },
          {
            authorName: "Wayne Liew",
            authorURL:
              "https://www.google.com/maps/contrib/103602068379760817306/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Ggr5OrpgpEAS0CSz39EbId5dmeWJDE68a2J_CHj=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text: "",
            time: "2020-12-11T11:25:15Z",
            language: "",
          },
        ],
        rating: 4.8,
        contact: {
          primaryContactNo: "+6567026338",
          secondaryContactNo: "+6591549424",
        },
        companyDisplayName: "CAMELOT PTE. LTD.",
        pricing: {
          others: "$12/pax",
        },
        nearestMrtStation: "",
        amenities: "Wheelchair Accessible,Carpark",
        categoryDescription: "Attractions",
        admissionInfo:
          "2 hour Single kayak rental: $12\n2 hour Double kayak rental: $24\n\nPromotion\n1 hour kayaking: $8/pax",
        tags: [
          "Action",
          "Family-friendly",
          "Yishun",
          "Education",
          "Neighbourhood",
          "Group of People",
          "Ecotourism",
          "Short Stay",
          "Sports",
          "Activities",
          "Explorers",
          "Adventure",
          "Young Adults",
          "Experiences",
          "Families",
          "Attractions",
          "Heritage",
          "Romantic",
          "Sunset",
          "Animals",
          "Tourists",
          "Water Sports",
          "Leisure",
          "Team Sports",
          "Adults",
          "Lifestyles",
          "Seletar",
          "Sightseeing",
          "Parks and Gardens",
          "Greenery",
        ],
        description: "2-hour Kayak Rental",
        source: "CAMELOT PTE. LTD.",
        group: "",
        address: {
          block: "100",
          streetName: "Yishun Avenue 1",
          floorNumber: "01",
          unitNumber: "01",
          buildingName:
            "Lower Seletar Water Sports Centre (Managed by Camelot Pte Ltd)",
          postalCode: "769140",
        },
        name: "Kayaking at Lower Seletar Water Sports Centre",
        location: {
          latitude: 1.409964,
          longitude: 103.831951,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "WWW.CAMELOTSG.BIZ",
        officialEmail: "ASKUS@CAMELOTSG.BIZ",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "tuesday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "wednesday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "friday",
            description: "",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "saturday",
            description: "",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "08:00",
            closeTime: "18:00",
            day: "sunday",
            description: "",
            sequenceNumber: 6,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p>Re-opened on 20th October 2020 to promote water sports namely, kayaking &amp; Dragonboating, Lower Seletar Water Sports Centre (LSWSC) is now managed by <b>Camelot Pte Ltd.\n</b><br><br>Experience the tranquility and peace with turquoise waters and breeze at Lower Seletar Reservoir Park. What better way to spend your day other than leisurely paddling on the calm waters of Lower Seletar Reservoir while a our guide bring you through a wider water area sharing the beauty of the animals and plants which can be seen at LSWSC.&nbsp; Quickly gather your friends, family and outdoor enthusiasts and create a group of 5, minimally, to kick start your adventure!<br><br><b>Kayaking Introductory Programme:</b><br><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">- Minimum of 5 pax to start<br></span><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">- 1 Instructor : 5 participants<br></span><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">- Timeslots: 8am - 10am, 10am - 12pm, 12pm - 2pm, 2pm - 4pm, 4pm - 6pm<br></span><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">- Online booking form: https://www.picktime.com/CAMELOTLSWSC</span></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "1019f808972332d42f5b5effb5815156d28",
            uuid: "1019f808972332d42f5b5effb5815156d28",
            libraryUuid: "104ebfe1cffbd684c95beb21a4f41ef44d4",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "1019f808972332d42f5b5effb5815156d28",
            uuid: "10109cd41872651495d96bad1c23b13b17c",
            libraryUuid: "104ebfe1cffbd684c95beb21a4f41ef44d4",
            url: "",
          },
        ],
        uuid: "002f2e46960e8004011b6718afdbfdf788b",
        metadata: {
          createdDate: "2020-11-27T16:05:56Z",
          updatedDate: "2020-11-27T17:13:14Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Lester Chan",
            authorURL:
              "https://www.google.com/maps/contrib/103726942228773273943/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjYpnYBo_GzKltEFOtYETNUEY7daSrEpLenj4w=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "Amazing kayaking experience with Gilbert and Pat. I brought my 12 year old son and we did the 1 star course. Gilbert is a very patient instructor and passionate about kayaking and Pat really made us all feel well looked after! Gilbert tailored his teaching to our level. Isaac had an amazing time in his first proper kayaking experience. I have kayaked on and off since my teens but i learnt a huge amount in this course, corrected a lot of bad habits and had a huge amount of fun. Will be back for the 2-star!",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Win Tai",
            authorURL:
              "https://www.google.com/maps/contrib/114240320617932935405/reviews",
            profilePhoto:
              "https://lh5.googleusercontent.com/-59bus5N85Ls/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucknETJOWHsX6GSTUMTZ-FUfbEJudA/s128-c0x00000000-cc-rp-mo-ba6/photo.jpg",
            rating: 5,
            text:
              "Gilbert is a very good kyaking coach. Experienced and patient. Very knowledgeable about local waters and technical skills needed for 1 and 2 star courses. Highly recommended to attend his classes. Learning how to go on expeditions around Singapore waters are very important for us to learn about how to survive and stay safe. Never put yourself in a dangerous situation.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Irina Liew",
            authorURL:
              "https://www.google.com/maps/contrib/117659428976806466008/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhFj14S5ANtdiShWZ31YJZjOeVSMue8JN37O2U9zA=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "Mr Gilbert is an amazing, patient and experienced coach. He is very friendly and is always willingly to help us out. Having him with us out at sea feels really safe. I really enjoyed his lessons!! 10/10 recommended.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Suriaman Sulisno",
            authorURL:
              "https://www.google.com/maps/contrib/109227267394759856922/reviews",
            profilePhoto:
              "https://lh4.googleusercontent.com/-2xLlPe8S_ok/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnn1MjFDVu90uOtWDgQqmmoZLqvLA/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "Thank you Coach Gilbert for the fun, training & great experiences sharing of kayaking, esp. accepting big size guy like me & provide kayak dat can fit me. It's my 1st time kayaking in enclosed cockpit & quite worry in the beginning of boat capsizing & won't able to handle it. But after the safety training, I'm more confident now & looking forward for more fun in kayaking as new hobby. Many thanks also to Pat for all the good arrangement. Highly recommend X'treme Kayaking for people who wish to learn kayaking !",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "智Zhile",
            authorURL:
              "https://www.google.com/maps/contrib/104260964182405485567/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjWbzO18aTMFbDfB6m-0xTMpPYGMxg36hKMFR895A=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "Mr Gilbert is a very patient & detailed instructor. Thoroughly enjoyed my course & expedition w/ the group. Equipment was also well maintained. Thank you Mr Gilbert! :)",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 5,
        contact: {
          primaryContactNo: "+6567026338",
          secondaryContactNo: "+6591549424",
        },
        companyDisplayName: "CAMELOT PTE. LTD.",
        pricing: {
          others: "$25",
        },
        nearestMrtStation: "Khatib MRT Station",
        amenities: "Wheelchair Accessible,Carpark",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: [
          "Beauty",
          "Action",
          "Yishun",
          "Outdoors",
          "Corporate Events",
          "Neighbourhood",
          "Group of People",
          "Ecotourism",
          "Outdoor Recreation",
          "Short Stay",
          "Sports",
          "Nature",
          "Adventure",
          "Unique Venues",
          "Young Adults",
          "Physical Sports",
          "Attractions",
          "Heritage",
          "Romantic",
          "Sunset",
          "Animals",
          "Tourists",
          "Water Sports",
          "Leisure",
          "Adults",
          "Seletar",
          "Sightseeing",
          "Day",
          "Parks and Gardens",
          "Greenery",
        ],
        description:
          "2-hour Kayaking Introductory Programme @ Lower Seletar Water Sports Centre with Instructor",
        source: "CAMELOT PTE. LTD.",
        group: "",
        address: {
          block: "100",
          streetName: "Yishun Avenue 1",
          floorNumber: "01",
          unitNumber: "01",
          buildingName:
            "Lower Seletar Water Sports Centre (Managed by Camelot Pte Ltd)",
          postalCode: "769140",
        },
        name: "Kayak Introductory Programme ",
        location: {
          latitude: 1.410034,
          longitude: 103.831926,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.sentosa.com.sg",
        officialEmail: "guest_services@sentosa.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "09:00",
            closeTime: "11:30",
            day: "thursday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "11:30",
            day: "friday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "11:30",
            day: "saturday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "11:30",
            day: "sunday",
            description: "",
            sequenceNumber: 4,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p><b><a href="https://store.sentosa.com.sg/main/attractions/yachtcruisesg/369#!/" target="_blank">Get this Daycation Bundle here</a></b></p><p>Cruise from the Marina at One Degree 15 on a private yacht towards these historical islands. You will be thrilled and surprised to know the stories of each and every Island through our narrative guides on board. A stopover on Kusu Island will blow your mind as there is a Chinese Temple and  a Malay Shrine on the island, each with a colourful story behind of them. Not forgetting the turtle sanctuary which houses hundreds of turtles lazing around. Hurry and book with us before you miss the boat!\n\n</p><p><b>Package Includes: </b>\n</p><p>- 2.5 hr Southern Islands Yacht Guide Tour\n</p><p>- Round Trip Cable Car ticket for both Sentosa &amp; Mount Faber line</p><p><b>Terms and Conditions:&nbsp;</b></p><p>- Valid till 31 Mar 2021\n</p><p>- Available on Thu to Sun, 9am - 11.30am.\n</p><p>- Strictly no walk-ins.\n</p><p>- Pick up/Drop off at Sentosa Cove (outside 7-Eleven).\n</p><p>- Please be at the pick up point 15mins before your scheduled departure.\n</p><p>- Minimum of 5 passengers to go. In the event where the minimum passenger requirement is not met, trip will be rescheduled or postponed.\n</p><p>- In the event of bad weather, trip may be postponed due to safety precautions unless mentioned otherwise by the captain.\n</p><p>- Cable Car tickets will be given onboard the Yacht. \n</p><p>- All guests will need to proceed to Yacht scheduled departure slot before heading for Cable Car ride.</p><p><b>Cruise Operator: \n\n</b></p><p>YachtCruiseSG<br></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "101c8a9b6a70bf148bd908e5452093efecf",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "10129ce810739c44a2ba6c2dc6bab442188",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        uuid: "00292d8f2589545463d8d511fa914b2d3a5",
        metadata: {
          createdDate: "2020-10-20T15:00:23Z",
          updatedDate: "2020-11-25T19:35:13Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Kelly Seo",
            authorURL:
              "https://www.google.com/maps/contrib/110942795890174332898/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiX9fL7vQD5hiYy-Ai-yQoNIu6sEoNv1qpUQcjoPA=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            text: "no air con... but now... no much other choice...",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Kamarudin Neo Ibrahim",
            authorURL:
              "https://www.google.com/maps/contrib/118373032430651076576/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjRH5hupm9UXBg2GYKUcDEy1PUoxkuM_TuYIhEUezw=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "A great way to fly! Singapore Cable Car has it's own uniqueness and it's clean. Love the view that takes you away the moment it starts flying. Staffs were helpful and friendly with excellent customer service. Thank you!",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Nadine",
            authorURL:
              "https://www.google.com/maps/contrib/100153045843408119644/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjX6nGZxNtSZZSwJIpQyS8ajPycgdLZh2zlaYTm=s128-c0x00000000-cc-rp-mo-ba2",
            rating: 5,
            text:
              "Absolutely loved it! Its quite an experience to see the west side of this country from top & in the air. It was also a time to rest our feet for a while from the day-long walking. During the night the lights of the ships and the hotels create a unique ambiance nice! Highly recommend",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Peter Ng",
            authorURL:
              "https://www.google.com/maps/contrib/113626434639145587424/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gjy4kSQGHcva7HCLf4FaMemQCJlxTbGmkjXWhR4lg=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            text:
              "A beautiful view from Mount Faber to Sentosa, especially beautiful when it's sunset time. The ride closed a bit too early especially when you're dining at the restaurants. Once you dine after 8pm, you definitely need to call a cab as no empty taxi will go up there.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Maggie C",
            authorURL:
              "https://www.google.com/maps/contrib/105891117476488604403/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiGe0azZGtk-gti9eICuqMzIO2rtJowzQhRmkRS=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "I went to Sentosa Island by the Singapore cable car. This was a wonderful experience. You can see the whole Sentosa Island from the Top, especially Universal Studios (one of the attractions of Sentosa Island). I just love the ride. It is of around 5-7 minutes ride but it's amazing. I would highly recommend the visit once at least. Whenever you get a chance to visit Singapore you must visit there.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.6,
        contact: {
          primaryContactNo: "+6567368672",
          secondaryContactNo: "",
        },
        companyDisplayName: "Sentosa Development Corporation",
        pricing: {
          others: "$100 per adult & $90 per child",
        },
        nearestMrtStation: "Harbourfront",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Child ticket is eligible for children below 12 years old only.",
        tags: ["Adventure", "Sentosa", "Attractions"],
        description:
          "2.5 hr Southern Islands Yacht Guide Tour & Round Trip Cable Car ticket for both Sentosa and Mount Faber line",
        source: "Sentosa Development Corporation",
        group: "",
        address: {
          block: "1",
          streetName: "Cove Ave",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Sentosa Cove Arrival Plaza",
          postalCode: "098537",
        },
        name:
          "Southern Island Tour & Cable Car Bundle at $100 per adult & $90 per child",
        location: {
          latitude: 1.2469797,
          longitude: 103.8309409,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.sentosa.com.sg",
        officialEmail: "guest_services@sentosa.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "17:00",
            closeTime: "19:00",
            day: "thursday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "17:00",
            closeTime: "19:00",
            day: "friday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "17:00",
            closeTime: "19:00",
            day: "saturday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "17:00",
            closeTime: "19:00",
            day: "sunday",
            description: "",
            sequenceNumber: 4,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p><b><a href="https://store.sentosa.com.sg/main/attractions/yachtcruisesg/369#!/" target="_blank">Get this Daycation Bundle here</a></b></p><p>Lifestyle elites &amp; active seniors can relax and enjoy the cool sea breeze whilst enjoying freshly baked pastries, coffee or tea followed by a chill out dinner at the Cove Restaurant.</p><p><b>Package Includes:</b></p><p>- 2 hr Sail served with pastries, coffee or tea\n</p><p>- 5-course dinner at Wok°15</p><p><b>Terms and Conditions:&nbsp;</b></p><p>- Valid till 31 Mar 2021.\n</p><p>- Available on Thu to Sun, 5pm.\n</p><p>- Strictly no walk-ins.\n</p><p>- Pick up/Drop off at Sentosa Cove (outside 7-Eleven).\n</p><p>- Please be at the pick up point 15mins before your scheduled departure.\n</p><p>- Minimum of 5 passengers to go. In the event where the minimum passenger requirement is not met, trip will be rescheduled or postponed.\n</p><p>- In the event of bad weather, trip may be postponed due to safety precautions unless mentioned otherwise by the captain.<br></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "101c8a9b6a70bf148bd908e5452093efecf",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "10129ce810739c44a2ba6c2dc6bab442188",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        uuid: "002b54583b1f94b4833b2f190a50492bc3b",
        metadata: {
          createdDate: "2020-10-20T15:28:46Z",
          updatedDate: "2020-11-25T19:34:50Z",
        },
        supportedLanguage: ["EN"],
        reviews: [],
        rating: 0,
        contact: {
          primaryContactNo: "+6567368672",
          secondaryContactNo: "",
        },
        companyDisplayName: "Sentosa Development Corporation",
        pricing: {
          others: "$888 for 5 pax",
        },
        nearestMrtStation: "Harbourfront",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: ["Dinner", "Sentosa", "Attractions", "High Tea"],
        description:
          "2 hr Sail served with pastries, coffee or tea & 5-course dinner at Wok°15",
        source: "Sentosa Development Corporation",
        group: "",
        address: {
          block: "1",
          streetName: "Cove Ave",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Sentosa Cove Arrival Plaza",
          postalCode: "098497",
        },
        name: "High Tea on High Seas at $888 for 5 pax",
        location: {
          latitude: 1.2455774,
          longitude: 103.8397694,
        },
        type: "Leisure & Recreation",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.sentosa.com.sg",
        officialEmail: "reservations@sentosa.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "18:00",
            closeTime: "21:00",
            day: "thursday",
            description: "Slots are 18:00-19:00 & 19:45-20:45",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "18:00",
            closeTime: "21:00",
            day: "friday",
            description: "Slots are 18:00-19:00 & 19:45-20:45",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "18:00",
            closeTime: "21:00",
            day: "saturday",
            description: "Slots are 18:00-19:00 & 19:45-20:45",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "18:00",
            closeTime: "21:00",
            day: "sunday",
            description: "Slots are 18:00-19:00 & 19:45-20:45",
            sequenceNumber: 4,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p><b><a href="https://store.sentosa.com.sg/main/packages/yacht--city-skyline-cruise-wit/381#!/" target="_blank">Get this Daycation Bundle here</a></b></p><p>Cruise along the scenic Singapore Skyline and witness the orange red skies when the sun sets. Soak in the sea breeze and feel it upon your face. Come onboard the luxury yacht and make it an evening to remember with your families, friends and loved ones! What\'s more, you get to choose your preferred picnic spot at anytime of the day. Each set consists of 2 mains of your choice, 3 sides and drinks, including a beach mat.</p><p><b>Package Includes:</b>\n</p><p>- 1 hr City Skyline Cruise with 1 Mocktail per pax\n</p><p>- GOLD Peaknic Set (serves 2-3pax), comes with a choice of 2 Mains, sharing Platter of Cajun Fries, Chicken Nuggets, Chicken Wings, 3 x Packet Drinks, Picnic Mat and Insulated Bag.</p><p><b>Terms and Conditions:</b></p><p>- Valid till 31 Mar 2021.\n</p><p>- City Skyline Cruise is available on Thu to Sun, 6pm - 7pm or 7.45pm - 8.45pm.\n</p><p>- City Skyline Cruise\'s Pick up/Drop off is at Sentosa Cove (outside 7-Eleven).\n</p><p>- All guests are to gather 30 minutes prior to scheduled departure on date of visit.\n</p><p>- You may contact +65 9231 3939 should you encounter any difficulties locating the meet up point.\n</p><p>- GOLD Peaknic Set requires an advance order of 2 working days.\n</p><p>- GOLD Peaknic Set is available for collection from 12pm - 6pm at Good Old Days (Beach Station).\n</p><p>- GOLD Peaknic Set will be considered forfeited if booking cancellation is made less than 2 working days in advance.\n</p><p>- Kindly bring along your Chope booking confirmation email &amp; Sentosa confirmation receipt on date of visit for verification. \n</p><p>- Guests will need to present verification documents for exchange of tickets at Sentosa Ticketing Counters first, before proceeding to ONE°15 Marina Sentosa Cove for scheduled departure.</p><p>-&nbsp;Sentosa Reservation Centre will be in touch with you within 48hrs to verify and facilitate the reservation of your package. Alternatively, for any booking queries you may wish to email the Reservation Centre directly at <a href="mailto: reservations@sentosa.com.sg" target="_blank">reservations@sentosa.com.sg</a> or call 6279 3267.</p><p></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "101c8a9b6a70bf148bd908e5452093efecf",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "10129ce810739c44a2ba6c2dc6bab442188",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        uuid: "0024a32f11b8e234bf9bf7dba2750e22079",
        metadata: {
          createdDate: "2020-10-20T16:14:02Z",
          updatedDate: "2020-11-25T19:34:30Z",
        },
        supportedLanguage: ["EN"],
        reviews: [],
        rating: 0,
        contact: {
          primaryContactNo: "+6562793267",
          secondaryContactNo: "+6592313939",
        },
        companyDisplayName: "Sentosa Development Corporation",
        pricing: {
          others: "$173 for 3 pax",
        },
        nearestMrtStation: "Harbourfront",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Kindly bring along your Chope booking confirmation email & Sentosa confirmation receipt on date of visit for verification. Guests will need to present verification documents for exchange of tickets at Sentosa Ticketing Counters first, before proceeding.",
        tags: ["Luxury", "Sentosa", "Attractions"],
        description:
          "Enjoy a 1 hour City Skyline Cruise with 1 Mocktail per pax & GOLD Peaknic Set",
        source: "Sentosa Development Corporation",
        group: "",
        address: {
          block: "1",
          streetName: "Cove Ave",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Sentosa Cove Arrival Plaza",
          postalCode: "098537",
        },
        name: "Yacht - City Skyline Cruise with Picnic at $173 for 3 pax",
        location: {
          latitude: 1.2455774,
          longitude: 103.8397694,
        },
        type: "Leisure & Recreation",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.sentosa.com.sg",
        officialEmail: "guest_services@sentosa.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "18:00",
            closeTime: "20:45",
            day: "thursday",
            description: "Tour times are on 6pm - 7pm and 7.45pm - 8.45pm",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "18:00",
            closeTime: "20:45",
            day: "friday",
            description: "Tour times are on 6pm - 7pm and 7.45pm - 8.45pm",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "18:00",
            closeTime: "20:45",
            day: "saturday",
            description: "Tour times are on 6pm - 7pm and 7.45pm - 8.45pm",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "18:00",
            closeTime: "20:45",
            day: "sunday",
            description: "Tour times are on 6pm - 7pm and 7.45pm - 8.45pm",
            sequenceNumber: 4,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p><b><a href="https://store.sentosa.com.sg/main/attractions/yachtcruisesg/369#!/" target="_blank">Get this Daycation Bundle here</a></b></p><p>Take an evening cruise along the beautiful city skyline of Singapore and see it from a different point of view! Capture the spectacular sight of the beautiful sunset onboard our luxury yacht and make it an evening to remember!</p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><b>Package Includes:</b></span></p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">1 hr City Skyline Cruise &amp; 1 Mocktail</span></p><p><b>Terms and Conditions:</b><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"></span></p><p>- Valid till 31 Mar 2021\n</p><p>- Available on Thu to Sun, 6pm - 7pm or 7.45pm - 8.45pm.\n</p><p>- Strictly no walk-ins.\n</p><p>- Pick up/Drop off at Sentosa Cove (outside 7-Eleven).\n</p><p>- You may contact +65 9231 3939 should you encounter any difficulties locating the meet up point.\n</p><p>- Please be at the pick up point 15mins before your scheduled departure.\n</p><p>- Minimum of 5 passengers to go. In the event where the minimum passenger requirement is not met, trip will be rescheduled or postponed.\n</p><p>- In the event of bad weather, trip may be postponed due to safety precautions unless mentioned otherwise by the captain.</p><p><b>Cruise Operator:&nbsp;</b></p><p>YachtCruiseSG<br></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "101c8a9b6a70bf148bd908e5452093efecf",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101c8a9b6a70bf148bd908e5452093efecf",
            uuid: "10129ce810739c44a2ba6c2dc6bab442188",
            libraryUuid: "104d379306b2c524d98a531175cc0e5911f",
            url: "",
          },
        ],
        uuid: "00246af3f0c6fd14ecc9f051d9d20476b32",
        metadata: {
          createdDate: "2020-10-20T12:33:03Z",
          updatedDate: "2020-11-25T19:34:13Z",
        },
        supportedLanguage: ["EN"],
        reviews: [],
        rating: 5,
        contact: {
          primaryContactNo: "+6567368672",
          secondaryContactNo: "",
        },
        companyDisplayName: "Sentosa Development Corporation",
        pricing: {
          others: "$50 per adult & $40 per child",
        },
        nearestMrtStation: "HarbourFront",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Child ticket is only eligible for children below 12 years old only.",
        tags: ["Cruises", "Sentosa", "Attractions"],
        description: "City Skyline Cruise at $50 per adult & $40 per child",
        source: "Sentosa Development Corporation",
        group: "",
        address: {
          block: "1",
          streetName: "Cove Avenue",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Sentosa Cove Arrival Plaza",
          postalCode: "098537",
        },
        name: "City Skyline Cruise at $50 per adult & $40 per child",
        location: {
          latitude: 1.2469797,
          longitude: 103.6996199,
        },
        type: "Leisure & Recreation",
      },
      {
        ticketed: "",
        videos: [],
        documents: [],
        officialWebsite: "www.weplaypaintball.com",
        officialEmail: "info@weplaypaintball.com",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "public_holiday",
            description: "Advance bookings required.",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "monday",
            description: "Advance bookings required.",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "tuesday",
            description: "Advance bookings required.",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "wednesday",
            description: "Advance bookings required.",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "thursday",
            description: "Advance bookings required.",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "friday",
            description: "Advance bookings required.",
            sequenceNumber: 6,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "saturday",
            description: "Advance bookings required.",
            sequenceNumber: 7,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "19:00",
            day: "sunday",
            description: "Advance bookings required.",
            sequenceNumber: 8,
          },
        ],
        notes:
          "Advance bookings required. Open by appointment (9am-7pm daily) only.",
        temporarilyClosed: "N",
        body:
          "<p>If you are looking for an exciting adrenaline pumping outdoor activity, paintball is for you. Paintball is a safe, fun and engaging team-based shooting game. Red Dynasty offers multiple playing arenas with different game objectives to encourage teamwork, nurture leadership, improves communication, build trust, boost self-esteem, enhance problem-solving skills and decision making.\n\nNavigate obstacles and bunkers to dominate the battlefield, defuse threats or eliminate opponents. The first team who completes the objective wins. Select a package with more paintballs to experience the full range of playing arenas and exciting scenarios.\n\n(Minimum age requirement 14 years old)<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "",
            uuid: "",
            libraryUuid: "1043a62c61110f24013a1dde372f17d7b6f",
            url:
              "https://tih-api.stb.gov.sg/media/v1/download/uuid/10165a3634dc97f4cb8b87a2ee09d1e5eee",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "",
            uuid: "10165a3634dc97f4cb8b87a2ee09d1e5eee",
            libraryUuid: "1043a62c61110f24013a1dde372f17d7b6f",
            url: "",
          },
        ],
        uuid: "002ab742547c88442dca6440425148bb744",
        metadata: {
          createdDate: "2020-11-23T23:14:07Z",
          updatedDate: "2020-11-23T23:14:07Z",
        },
        supportedLanguage: ["EN"],
        reviews: [],
        rating: 0,
        contact: {
          primaryContactNo: "+6566594782",
          secondaryContactNo: "+6567557537",
        },
        companyDisplayName: "EK PAINTBALL GROUP PTE. LTD.",
        pricing: {
          others: "",
        },
        nearestMrtStation: "Sixth Avenue",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: [
          "Adventure",
          "Christmas",
          "Young Adults",
          "Love & New Beginnings",
          "Businesses",
          "Parties",
          "Corporate Events",
          "Local Brands",
          "Tourists",
          "Sports Events",
          "Team Sports",
          "Bukit Timah",
          "Teenagers",
          "Clubs",
          "Social Events",
          "Sports",
        ],
        description:
          "We Play Paintball! Fun splatters and adrenaline rushing time!",
        source: "EK PAINTBALL GROUP PTE. LTD.",
        group: "",
        address: {
          block: "220",
          streetName: "Turf Club Road",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Red Dynasty Paintball Park",
          postalCode: "288001",
        },
        name: "Red Dynasty Paintball Park",
        location: {
          latitude: 1.342062,
          longitude: 103.792437,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "https://www.battlebox.com.sg/",
        officialEmail: "enquiry@battlebox.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "10:30",
            closeTime: "16:30",
            day: "public_holiday",
            description: "recommended last entry: 3.20pm",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "10:30",
            closeTime: "16:30",
            day: "wednesday",
            description: "recommended last entry: 3.20pm",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "10:30",
            closeTime: "16:30",
            day: "thursday",
            description: "recommended last entry: 3.20pm",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "10:30",
            closeTime: "16:30",
            day: "friday",
            description: "recommended last entry: 3.20pm",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "10:30",
            closeTime: "16:30",
            day: "saturday",
            description: "recommended last entry: 3.20pm",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "10:30",
            closeTime: "16:30",
            day: "sunday",
            description: "recommended last entry: 3.20pm",
            sequenceNumber: 6,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>Explore the top secret Battlebox where Lieutenant-General Percival and his senior officers directed the Battle for Singapore in World War II. Venture into this authentic underground command centre 9 metres underground with an expert guide to lead the way. \n\n<br><br>Discover the labyrinth of rooms and corridors and view authentic wartime artefacts. Watch the war unfold on land and on sea, follow the battles in the air, and discover the tension and drama behind the decision to surrender the much-vaunted ‘Singapore Fortress’ on 15 February 1942.  \n\n<br><br>For those with an adventurous spirit and a penchant for self-discovery, Battlebox now allows visitors to explore the bunker on their own after the guided tour!\n\n<br><br>Embrace your bold side and step into this 1930s war bunker. You will come away with an unforgettable experience and a deeper understanding of the Fall of Singapore.<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101273785e4328b468c9af50dbb626fb629",
            uuid: "101273785e4328b468c9af50dbb626fb629",
            libraryUuid: "1044bf0437de780400d95e1e950d76a5022",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101273785e4328b468c9af50dbb626fb629",
            uuid: "1010988719a3a6243949aa84cf8a92ea8a6",
            libraryUuid: "1044bf0437de780400d95e1e950d76a5022",
            url: "",
          },
          {
            primaryFileMediumUuid: "1013f31c4912dbb4e5cad2cfc685cdb1e6f",
            uuid: "1012f417458f3ab4a098160b4cd40f591c3",
            libraryUuid: "104bb27cf154c90435f9b0522cc5151778a",
            url: "",
          },
          {
            primaryFileMediumUuid: "1019f20918ab4f24609a238d47336aae8e5",
            uuid: "10102f681d53de64837a8ad3a2ae2d20aaf",
            libraryUuid: "1045740edb3b20e4e9cae267a68ed1d38e8",
            url: "",
          },
          {
            primaryFileMediumUuid: "1016db006bac796463a982177486b929cec",
            uuid: "10113a89e32b0ed44999a24f3768a18e3f4",
            libraryUuid: "104f404ed4f192042948e30dd353d85e1a2",
            url: "",
          },
          {
            primaryFileMediumUuid: "1017c8ca4f9fddd4c76bf81912926007e74",
            uuid: "10153398d4632034feaa06c2f9bf9520652",
            libraryUuid: "10496fca119ba784ab8b039d635693ae1a0",
            url: "",
          },
        ],
        uuid: "00244c186520eba4f9abcfce8f5e916701c",
        metadata: {
          createdDate: "2020-11-23T14:24:35Z",
          updatedDate: "2020-11-23T14:24:35Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Ray Fung",
            authorURL:
              "https://www.google.com/maps/contrib/102134980145075393876/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gj9pSKCg4Kj_Vj5-TKehd3d20QC5IiWPxYkSfwtp68=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "Fascinating museum that tells a dramatic story. Even without the guided tour, the wax figures/ exhibit explanations/ well narrated videos do a good job at bringing history to life.\n\nRather cold air conditioning even on a hot day, so bring a top layer if you want.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "L Smith",
            authorURL:
              "https://www.google.com/maps/contrib/107418543834666415745/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgTgVNOcFQoqZ1Cyb07hcj54RODYUVUqEMXzsvJ1g=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "Fantastic! They have a brilliant team working here. I wanted to buy a gift for my Dad while I am stuck in HCM, Vietnam. The team were brilliant to help set up 2 tickets for me which I could pay online. Thank you so so much!",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Melanie H",
            authorURL:
              "https://www.google.com/maps/contrib/111586914386347095191/reviews",
            profilePhoto:
              "https://lh4.googleusercontent.com/-f3QNG8oEXwE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucluEwBRCiLnv0FH2SIIt3OEXarVvw/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "Really enjoyed learning about this important part of Singapore's history. Great experience for kids to to be in the actual bunker. highly recommended!",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Chaya Tremolieres",
            authorURL:
              "https://www.google.com/maps/contrib/107963139633310308142/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhZ8XgV9sPIl6iwi52mYiUCYFe7cvFqOdMgLVkb=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "It was exciting and very real. the atmosphere was great. i enjoyed myself with my friend. You can really feel how it is like during that era. All the difficulties that they have.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Helen Davis",
            authorURL:
              "https://www.google.com/maps/contrib/117649657210044618845/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gjvs7X0Ro1jthkZYZzfgzNbxSuXZ9xfQWPH0Ujn=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "It was exciting and very real. the atmosphere was great. i enjoyed myself with my friend. You can really feel how it is like during that era. All the difficulties that they have.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.6,
        contact: {
          primaryContactNo: "+6563386133",
          secondaryContactNo: "",
        },
        companyDisplayName: "SINGAPORE HISTORY CONSULTANTS PTE. LTD.",
        pricing: {
          others: "Adult: $20; Child: $10 (7 to 12 years old)",
        },
        nearestMrtStation:
          "Dhoby Guat MRT Station (Exit B), Fort Canning MRT Station (Exit B)",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Admissions into the Battlebox is staggered every 20 minutes.",
        tags: ["Experiences", "Families", "Attractions", "Parks and Gardens"],
        description:
          "Admission to Battlebox with Guided Tour & Self Exploration",
        source: "SINGAPORE HISTORY CONSULTANTS PTE. LTD.",
        group: "",
        address: {
          block: "",
          streetName: "2 Cox Terrace",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Battlebox",
          postalCode: "179622",
        },
        name: "Battlebox",
        location: {
          latitude: 1.2961611,
          longitude: 103.8461761,
        },
        type: "History & Culture",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.iflysingapore.com",
        officialEmail: "info@iflysingapore.com",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "09:00",
            closeTime: "22:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "10:00",
            closeTime: "22:00",
            day: "monday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "10:00",
            closeTime: "22:00",
            day: "tuesday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "11:00",
            closeTime: "22:00",
            day: "wednesday",
            description: "",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "10:00",
            closeTime: "22:00",
            day: "thursday",
            description: "",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "10:00",
            closeTime: "22:00",
            day: "friday",
            description: "",
            sequenceNumber: 6,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "22:00",
            day: "saturday",
            description: "",
            sequenceNumber: 7,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "22:00",
            day: "sunday",
            description: "",
            sequenceNumber: 8,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>Make all your flying dreams come true inside the world’s largest themed wind tunnel spanning 16.5 feet wide and 56.5 feet tall. And as the professionally-guided experience takes place inside a wind tunnel with 18 feet tall acrylic glass walls, it boasts a bonus view of the South China Sea and Siloso Beach.<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "1019ca560c76b4e49f68821867cedbfa1d6",
            uuid: "1019ca560c76b4e49f68821867cedbfa1d6",
            libraryUuid: "104b69d0434402d4bfebbdba8beb43ba3d7",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "1010e0ac44a721c4833ba18ffb3d0f87947",
            uuid: "101db51d6ed9af849cebc00335e4ab650b7",
            libraryUuid: "104de8ea029c6f94478978b4d7f6261c1ad",
            url: "",
          },
          {
            primaryFileMediumUuid: "1019ca560c76b4e49f68821867cedbfa1d6",
            uuid: "1017377f263ee7b4c39b23f88a01cc83047",
            libraryUuid: "104b69d0434402d4bfebbdba8beb43ba3d7",
            url: "",
          },
        ],
        uuid: "002144f8895731f40e985124fbab55e5e16",
        metadata: {
          createdDate: "2020-07-15T17:39:47Z",
          updatedDate: "2020-11-23T11:13:19Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Lawrence Ang",
            authorURL:
              "https://www.google.com/maps/contrib/116621168823831019190/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjprX3fuM6WaiMkbp7h9FJLIRhoo61d0r-KBK4guA=s128-c0x00000000-cc-rp-mo-ba4",
            rating: 5,
            text:
              "It's fun! Go for it. Dun take the tease package to fly 1 time pls. Definitely not enough though have option if time permits to add 1 more at discounted price. 2 dives at normal height after which if you top up 1 more dive to bring up fly higher!!!\n45s flight with 99percent other time waiting and briefing... But the best is saved for last..\nPhotos are sold at discount if you are not briefed during the flight process of pre flight photo options and post flight options.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Ye Ningyu",
            authorURL:
              "https://www.google.com/maps/contrib/107087338513654652032/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhxCfnABqjg2PmnpAAiNgWcGhUY_tP0VMoH_An9=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "Booked on Klook with discount for my husband at $62. Good deal! It’s always cool to fly. I got my courage to try skydiving after trying ifly few years ago and did my skydiving after that. It was an inspiring and encouraging experience.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Rum Tan",
            authorURL:
              "https://www.google.com/maps/contrib/114496947727572415842/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiulHwKZe6tAaF4f_EHsUvkjQQBVa-SaNXNIPK70w=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            text:
              'Waited for 1 hour plus for 1-minute of "flying". Experience was ok, but not much adrenaline rush. Would recommend real skydiving instead. If you are too scared for the real thing, you can try this.',
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Huang Jianhao",
            authorURL:
              "https://www.google.com/maps/contrib/114767723591410835286/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/-iq01NiWoSRQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn3RYcB7mEQN94d1mUQzDu31-orJg/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              'I am a first timer and gotten a promotional package called "Besties Fly Far Package" with my fiancée. The package includes approx. 45 seconds dive per person and each of us is entitled for one dive. That not all, we were so thrilled that we sign up for additional dive @ $20 only (U.P $40), its totally worth it!!!! Do drop by Sentosa to give it a try:)))\n\nThe staffs and instructors are extremely friendly and instructions are easy to follow.',
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Bilal W",
            authorURL:
              "https://www.google.com/maps/contrib/102073626137484300217/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gi7v5uzuk8g1mxH-2pOu8EUgZfO_-5mUUB75QqkSA=s128-c0x00000000-cc-rp-mo-ba4",
            rating: 5,
            text:
              "What a blast!\nCame here in February 2014 and dislocated my shoulder 45 seconds into the jump.\nHad to sign to the instructor that I was in excruciating pain.\nNevertheless, the team took care of me and called me an ambulance.\n\nLucky for me though, as I sat there on the seat in pain, my shoulder popped itself back in! Hooray!\n\nThis meant I wouldn't have to take an expensive tourist ambulance trip to a hospital.\n\nPhew.\n\nThose 45 seconds were fun though.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.3,
        contact: {
          primaryContactNo: "+6565710000",
          secondaryContactNo: "",
        },
        companyDisplayName: "SKYVENTURE VWT SINGAPORE PTE. LTD.",
        pricing: {
          others: "56",
        },
        nearestMrtStation: "Vivo City",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Local Teaser Package (1 skydive) - $56\nLocal Challenge Package (2 skydives) - $79",
        tags: [
          "Activities",
          "Action",
          "Couples",
          "Young Adults",
          "Experiences",
          "Physical Sports",
          "Team Sports",
          "Action Seekers",
          "Adults",
          "Group of People",
          "Families",
          "Attractions",
        ],
        description: "Indoor skydive at one of the world's largest wind tunnel",
        source: "SKYVENTURE VWT SINGAPORE PTE. LTD.",
        group: "SGClean",
        address: {
          block: "43",
          streetName: "Siloso Beach Walk",
          floorNumber: "01",
          unitNumber: "01",
          buildingName: "iFly Singapore",
          postalCode: "099010",
        },
        name: "iFly Singapore",
        location: {
          latitude: 1.252548,
          longitude: 103.817964,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.ducktours.com.sg",
        officialEmail: "sales@ducktours.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "09:00",
            closeTime: "18:30",
            day: "public_holiday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "18:30",
            day: "monday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "18:30",
            day: "thursday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "18:30",
            day: "friday",
            description: "",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "18:30",
            day: "saturday",
            description: "",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "18:30",
            day: "sunday",
            description: "",
            sequenceNumber: 6,
          },
        ],
        notes:
          "We have reopened with limited capacity & safe distancing precautionary measures in place.",
        temporarilyClosed: "N",
        body:
          '<p><b>#BigSavings on selected tickets when you #SingaporeRediscovers with Singapore DUCKtours and Big Bus Singapore. Book your tickets now or find out more at the <a href="https://www.ducktours.com.sg" target="_blank">Singapore DUCKtours official website</a>.</b><br></p><p>The Original DUCKtours @ Suntec City is the Singapore Tourism Award Winning Attraction. First in Singapore, an impressive 17 year perfect safety record, and 1 million passengers – nothing comes close to the Original DUCKtours @ Suntec City. This hour-long adventure starts with splashing into the Marina Bay and swimming off like a duck for a picturesque harbour tour before waddling back on land for a city tour of the historical Civic District.\n</p><p>Climb aboard a refurbished Vietnam War amphibious vehicle for a unique tour of Singapore. Depart from Suntec City, and start your land and water adventure with a big splash into the Marina Bay!\n</p><p>Cruise along Marina Bay, where you can admire views of the bustling urban city\'s skyline and marvel at Singapore\'s most iconic landmark—the Marina Bay Sands, Gardens by the Bay, the Esplanade Theatre and the towering Merlion.\n</p><p>Your journey continues as you waddle back onto land and drive past the Singapore Flyer and into the Civic District. There you’ll see the Padang where the first ever National Day Parade was being held in 1966, and the Old Supreme Court which has been converted into National Art Gallery of Singapore. \n</p><p>End the tour with a loop around the world’s largest water fountain at Suntec City, named the Fountain of Wealth, for good luck!</p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101fd58564f12454b92b858538158854625",
            uuid: "101fd58564f12454b92b858538158854625",
            libraryUuid: "10440566a9c23294d15827f773ab60ea3a3",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "10141f1b0be3a4e45318ac1724402e5b078",
            uuid: "1010f700203ae54465ead9807692c49143f",
            libraryUuid: "10412ca7b29bc294470bf4d22e6d39d23af",
            url: "",
          },
          {
            primaryFileMediumUuid: "101fd58564f12454b92b858538158854625",
            uuid: "1011bb47ba0afee4601b802a9a8cef8de66",
            libraryUuid: "10440566a9c23294d15827f773ab60ea3a3",
            url: "",
          },
          {
            primaryFileMediumUuid: "1019d06ca67223a44c29ce3d8814b85f3d7",
            uuid: "1016519e0c5f51c4b22b818769df2342450",
            libraryUuid: "1049564de6e94db4285a5637c91541e6ba4",
            url: "",
          },
          {
            primaryFileMediumUuid: "1015fecc5bae7874c9383ae6746adf4a0a3",
            uuid: "101fa9c94d4722a470db8e3801fea550f16",
            libraryUuid: "10456bf8caceea1439697a41db6aa19a63f",
            url: "",
          },
        ],
        uuid: "00209f83ea355c4408db1ab3f8a52a7f3d1",
        metadata: {
          createdDate: "2020-07-27T12:45:20Z",
          updatedDate: "2020-11-23T10:21:10Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "S H",
            authorURL:
              "https://www.google.com/maps/contrib/118339670979951913335/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/-Qn-cSdBtRMs/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclJApxKjDVCqG6eToQk4Sx-s9rQRw/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
            rating: 5,
            text:
              "Open Top Bus Tours and Duck Tours are must go! Just sit and relax and enjoy the view! How often can you slowly see the view of different parts of Singapore? Everyday we are rushing to work, home, zoom past these places without REALLY seeing them and appreciate the view. 🤭 So it was quite a refreshing change to just play tourist! 😍",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Joanna O",
            authorURL:
              "https://www.google.com/maps/contrib/103311134406589784579/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/-CjmAVeWlXcU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckcKxsW0xf3mbmvSaJDZuwyW9aGJw/s128-c0x00000000-cc-rp-mo-ba6/photo.jpg",
            rating: 5,
            text:
              "A fun touristy thing to do - or with little kids. We came to let our kids get on a boat, and they really enjoyed it, including the transitions from land to water and back. It's a nice way to see the sights of Singapore from a different vantage point. At less than an hour, it's a good amount of time especially for young children.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Ee Siang Fong",
            authorURL:
              "https://www.google.com/maps/contrib/103231556034155510284/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/-Aq8gXe4A-Ko/AAAAAAAAAAI/AAAAAAABFGE/AMZuuckei9Sw5fnHRHhMyk-LiuNfqy2xdg/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg",
            rating: 5,
            text:
              "Had my first tour on the duck Katrina and it was very enjoyable especially for the little ones. Due to the pandemic they are currently operating Fridays to Sundays and public or school holidays. Do call and check before you go. We did the 10am tour and weather is great with the sun not being too strong. My guess is an evening tour would be great as well. Overall our tour guide was very friendly. Thank you Mr. Glenford. The trip on the water was the star of the tour. The land part was just so so. Overall still an unique experience if you are visiting SG or being a local tourist.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Philippa H",
            authorURL:
              "https://www.google.com/maps/contrib/109746899817069699605/reviews",
            profilePhoto:
              "https://lh6.googleusercontent.com/-9Q3mW5ok1Dg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclEMQifGDBCTgiA_fynmCgbvqYq-w/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "We are locals, yet this is the first time for us to take this ride (courtesy of discount)\n\nIt is surprisingly lovely to enjoy Singapore from both land and water ride\nThere is pre recorded narrator that pointed interesting stuff (that even locals were not aware)\nThe guide made it exciting by having small games\n\nOverall, it's a great experience. We enjoyed it very much",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Tk W",
            authorURL:
              "https://www.google.com/maps/contrib/113240049152764985605/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgituJvVuHbPb1zarjPjI1-jYtbya4JqhzwZLvP=s128-c0x00000000-cc-rp-mo",
            rating: 4,
            text:
              "Bought the adult and child duck & bus package but my child was not given a seat for the big bus and had to sit on our lap. It was explained to me although we paid for child package but seats only allocated for duck tour but not bigbus. Seats were automatically assigned but its great that everyone gets to sit upstairs. We were given a booklet of expired vouchers, not sure why would any operator do that. Anyway the bus tour took 1 hr and took us to little India and also the entire orchard road stretch. The music played onboard matched the festive season so it was a nice touch.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.7,
        contact: {
          primaryContactNo: "+6563386877",
          secondaryContactNo: "",
        },
        companyDisplayName: "SINGAPORE DUCKTOURS PRIVATE LIMITED",
        pricing: {
          others: "Adult $43, Child $33, Toddler $13",
        },
        nearestMrtStation: "CC3 Esplanade (Exit A)",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Book online, call +65 6338 6877 or email sales@ducktours.com.sg to reserve and secure your DUCKtour. Please check-in 30 minutes prior to tour timing.",
        tags: [
          "Activities",
          "Family-friendly",
          "Adventure",
          "Kids-friendly",
          "Tourists",
          "Body of Water",
          "Civic District",
          "Families",
          "Marina Bay",
          "Kids",
        ],
        description:
          "Ride the original, award-winning DUCKtour! Hop-on and experience a unique land and sea adventure on an amphibious craft.",
        source: "SINGAPORE DUCKTOURS PRIVATE LIMITED",
        group: "",
        address: {
          block: "3",
          streetName: "Temasek Boulevard",
          floorNumber: "01",
          unitNumber: "330",
          buildingName:
            "BIG BUS & DUCK Tourist Hub @ Suntec City Convention Centre",
          postalCode: "038983",
        },
        name: "#DUCKtours",
        location: {
          latitude: 1.2941249,
          longitude: 103.857024,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "www.asiandmc.com",
        officialEmail: "sin-arrivals@asiandmc.com",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "06:00",
            closeTime: "21:00",
            day: "monday",
            description: "BOARDING TIME @ 2100H",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "06:00",
            closeTime: "21:00",
            day: "tuesday",
            description: "BOARDING TIME @ 2100H",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "06:00",
            closeTime: "21:00",
            day: "thursday",
            description: "BOARDING TIME @ 2100H",
            sequenceNumber: 3,
          },
        ],
        notes: "BOARDING TIME @ 2100H",
        temporarilyClosed: "N",
        body:
          "<p>This 16-deck high ship features iconic Quantum Class experiences such as the North Star, skydiving simulator, SeaPlex and the Two70 transformative venue with high-tech entertainment. A wide range of restaurants await guests, ranging from Jamie’s Italian to the whimsical Wonderland Imaginative Cuisine and the classic Chops Grille steakhouse. Quantum of the Seas is all about immersion — into rich Asian culture and cuisine, unforgettable destinations, deck-defying thrills and game changing onboard entertainment; You’re in for a bucket list trip unlike any other.<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101074262407233433e8f8db4c351b3886b",
            uuid: "101074262407233433e8f8db4c351b3886b",
            libraryUuid: "104edc8ec71241a47ac8a2c7d58343c45ca",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101074262407233433e8f8db4c351b3886b",
            uuid: "1015fcdbfc3c0ae42c6859cce2ba4356a4b",
            libraryUuid: "104edc8ec71241a47ac8a2c7d58343c45ca",
            url: "",
          },
        ],
        uuid: "002c277aa85875a4a148c9efdacb9e93de7",
        metadata: {
          createdDate: "2020-11-05T23:12:04Z",
          updatedDate: "2020-11-19T12:38:18Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Nicola Faulkner",
            authorURL:
              "https://www.google.com/maps/contrib/108733437370519276999/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhVIvzMKCVxs-bNirFLFFaXQrLPqEjkLkTZEuDF=s128-c0x00000000-cc-rp-mo-ba5",
            rating: 5,
            text:
              "Just returned from the Opening Cruise on Quantum of the Seas. It was incredible! The staff were amazing and ensured all physical distancing, mask wearing and hand sanitising protocols were followed. The food was amazing. Everything was served to us on a plate - even just a banana! to minimize touching. Not a huge range of vegetarian options, but still more than enough food to eat. Main dining room service from Pritesh and Malcolm was great! They remembered all our names and our preferences. Really good selection of vegetarian/vegan food. Our stateroom was cleaned well and the attendant- Aris was amazing. We had a 7yo and an 18m old with us. They had a great time. The 7yo did 1x 3h session in the kids club and really enjoyed himself. Wish we had picked a longer one, 2 nights wasn't enough. We even saw a pod of over 20 dolphins swimming along with the ship.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Siddhi Jain",
            authorURL:
              "https://www.google.com/maps/contrib/104634816826136537985/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhX9-FSQvnyjXnWk0LdOaShEEKYhYOc1QqeWcH2Jw=s128-c0x00000000-cc-rp-mo-ba2",
            rating: 5,
            text:
              "Experience in cardibean cruise is outstanding. 3 days tour also perfect. But I suggest management of cruise to keep non veg and veg counter different. As it will become difficult for vegetarians to eat food with non veg. Visitors. Otherwise, everything is soo good. Also team members are also very much supportive. Great memories 😍🙏🏼🤝🥳",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Brian Koh",
            authorURL:
              "https://www.google.com/maps/contrib/101002831842535323499/reviews",
            profilePhoto:
              "https://lh6.googleusercontent.com/-wFtgerfbxR4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck2BzE-n1Aazpj11aSj7WNde1E1sQ/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 1,
            text:
              "Just went on the Quantum of the seas. Honestly staff and service was friendly and great! Cleanliness was excellent as they kept sanitising places and temperature checks to make sure everyone was ok moving around the boat.\n\nFood was honestly not great. We had to eat at the same restaurant for 4 nights straight. Wanted to book other complimentary restaurants but all full. If you are ok with mass catered food, you might enjoy the cruise.\n\nEntertainment was really really bad. only had 3-4 shows for 4 nights on board. Some performance was really bad that my mum (which is normally easy to please) wanted to leave halfway.. and the show is only 30mins long. Basically comparing to Dream Cruise the quality and quantity is way way off. If you are there to just chill, sun tan and daze on deck.. You might enjoy your trip. Most Activities have to be book way in advance if you even want to try some of their main 'Attractions' if not the guest services will just say sorry its full. And because of the covid situation it is only running at 30% capacity. Can't imagine if its full capacity.. Will be a horror.\n\nCasino is really small too. Games are limited. They dont provide any drinks. EVERYTHING is chargeable. which is rare in a casino.\n\nIt is my first Cruise on Royal Caribbean amidst many times on Star Cruise and Dream Cruise. But i might dare say this is my last time on Royal Caribbean. And yes.. to top it off, they only give you 1 Bottle of Water per pax to last 4 nights. :)",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Hang Leong Chung",
            authorURL:
              "https://www.google.com/maps/contrib/115506858687573865551/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/-nzDKQY9c5zY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMHEsmWy__ZmSyMP_M_uT9kKu6Hg/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 1,
            text:
              "Poor service, suffer 200sgd losses because your customer officer did not update record or he lied. Please explain",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Claudia Fong Villa",
            authorURL:
              "https://www.google.com/maps/contrib/106669916267760923622/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhC_PhFgDDuw-bbcbFJXo9Q6NoMt02VjfuS3q_i=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 1,
            text:
              "Really upset for receiving false advertising via email for Black Friday and Ciber Monday, specifically the 40% off deluxe drinks package. The discounts are not reflected on the website and after calling and being on the phone for more than an hour and half in two different occasions and send multiple emails, the customer service team doesn't give me any solution for this problem. Very disappointed with how unprofessional they are and how they send lies via email to thousand or customers.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 3.9,
        contact: {
          primaryContactNo: "+6597967384",
          secondaryContactNo: "",
        },
        companyDisplayName: "ASIA CONSOLIDATED DMC PTE. LTD.",
        pricing: {
          others: "$469",
        },
        nearestMrtStation: "Marina South Pier MRT",
        amenities:
          "Spa,Swimming Pool,Gift Shop,Laundry & Dry Cleaning,Gym,Children's Pool,Children's Club,Connecting Rooms",
        categoryDescription: "Attractions",
        admissionInfo: "Confirmation required upon booking.",
        tags: [
          "Explorers",
          "Cruises",
          "Family-friendly",
          "Fly-Cruise",
          "Entertainment",
          "CruiseFly",
          "Marina Bay Cruise Centre Singapore",
          "Group of People",
          "Families",
        ],
        description: "Come Seek your next adventure onboard Royal Caribbean!",
        source: "ASIA CONSOLIDATED DMC PTE. LTD.",
        group: "",
        address: {
          block: "",
          streetName: "61 Marina Coastal Dr",
          floorNumber: "",
          unitNumber: "",
          buildingName: "Marina Bay Cruise Center",
          postalCode: "018947",
        },
        name: "ROYAL CARIBBEAN | QUANTUM OF THE SEAS",
        location: {
          latitude: 1.270974,
          longitude: 103.863461,
        },
        type: "Adventure",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "nightsafari.com.sg",
        officialEmail: "",
        staYear: "",
        businessHour: [
          {
            daily: true,
            openTime: "19:15",
            closeTime: "00:00",
            day: "daily",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "19:15",
            closeTime: "00:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 2,
          },
        ],
        notes: "Last admission at 11.15pm",
        temporarilyClosed: "N",
        body:
          "The Night Safari is the world’s first nocturnal wildlife park. Guests can catch a glimpse of animal life in habitats ranging from the Himalayan foothills to Southeast Asian jungles. The park’s four interlinked walking trails feature threatened and endangered species, such as clouded leopard. Visitors can encounter free-ranging wallabies on the Wallaby Trail. Crawling through a cave, visitors can also get close to Ridley’s beauty snakes and Asian black forest scorpions. The Creatures of the Night Show, which showcases survival instincts of nocturnal creatures, is a must-watch.",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "1011080df201c7441b9b42a01f49739e0c3",
            uuid: "1011080df201c7441b9b42a01f49739e0c3",
            libraryUuid: "10455ce0f19d6e14daa96dd0ec0d96db775",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "1018f41c83684a442218ae7c321b8b8306b",
            uuid: "101ff5d2b0ae6d84019945937055c0493aa",
            libraryUuid: "104c8427143d83940f09a97dd3543555f6b",
            url: "",
          },
          {
            primaryFileMediumUuid: "1011cde97e1edad44a2b0542c7d79350247",
            uuid: "101ff74b4227e3b49079b8902fef537223a",
            libraryUuid: "1043bce721ba0944fd88f0c8819355a3bbf",
            url: "",
          },
          {
            primaryFileMediumUuid: "1010da6ae34169541ee96a986e2756bb24f",
            uuid: "101be580bb1b90c492ea287d9b53abaae5f",
            libraryUuid: "10483c5689a2ae244779b2994e80d128bac",
            url: "",
          },
          {
            primaryFileMediumUuid: "1011080df201c7441b9b42a01f49739e0c3",
            uuid: "1018f4159fe54124df68641e33e0d0852d0",
            libraryUuid: "10455ce0f19d6e14daa96dd0ec0d96db775",
            url: "",
          },
          {
            primaryFileMediumUuid: "101d50069f7dac6412589fdd4f1be5393e1",
            uuid: "1013a3d1e5dbcea4d5ca9c1d0f26f220f05",
            libraryUuid: "104f82fcd0814e04f9094433eb8a35ed148",
            url: "",
          },
          {
            primaryFileMediumUuid: "1019998ab21764443c3a17d7af04ad1d928",
            uuid: "1019b9397477a55449294164613511bcd1f",
            libraryUuid: "104a972330446014708b055428eadb4f429",
            url: "",
          },
        ],
        uuid: "002d701d403a9e64bb39163a464c8faff82",
        metadata: {
          createdDate: "2018-09-25T15:13:06Z",
          updatedDate: "2020-11-18T17:41:20Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Amanda",
            authorURL:
              "https://www.google.com/maps/contrib/109816954137960185957/reviews",
            profilePhoto:
              "https://lh5.googleusercontent.com/-VCsVwtmoFlA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnlMnM4UvOcvdokdQvkfhS-L-YE5w/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 4,
            text:
              "Great experience. Visited with my brother while travelling and we both enjoyed it even though we are in our late 20s. Really good for families with young children. Staff were fun, knowledgeable and friendly. I would have loved to visit as a child. Would be nice if the ticket pricing was more competitive (or have better bundle offers with other major attractions. But I suppose as tourists it is expected and I've had the same experience in a lot of developed countries.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Aditya Bhokarikar",
            authorURL:
              "https://www.google.com/maps/contrib/101164891015589190365/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhDPvZlPAKpkffvPdxIyJxzj2eMDtcMVPxqeWejnVg=s128-c0x00000000-cc-rp-mo-ba2",
            rating: 5,
            text:
              "Loved it. Shows completely different animals than the Singapore Zoo and in their natural night time habitat. The tram ride is very nice and the night show is awesome. The guide is also very knowledgeable and keeps everyone engrossed and helps many people learn about the animal kingdom.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Yuki",
            authorURL:
              "https://www.google.com/maps/contrib/101005095179670515419/reviews",
            profilePhoto:
              "https://lh5.googleusercontent.com/-cZDayOAw_Ow/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm79ov0nY87IO_bczPXM1oRg1Ycrw/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "Well-maintained and no mosquito!\nWe didn’t have to wait for tram ride and could see many animals. But better to wait in line early for show. Capacity is only 50 people now.  Highly recommend to visit in this period.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Choo Wei Ming",
            authorURL:
              "https://www.google.com/maps/contrib/114389339736684216694/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhfhPXSfeczy_0sftYu9s0x0BZD_My1XeYLPDLpNw=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "Love the tram rides! The experience is very informative and interesting. After the tram rides, definitely need to have a walk trail throughout the whole Safari, especially with the several walk through experiences such as the flying squirrels and fruit bat.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Melissa Eisner",
            authorURL:
              "https://www.google.com/maps/contrib/117316308946167178763/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiDnvCrRcerIFr9UazMDiaulGV6N0Nde69XPaKG=s128-c0x00000000-cc-rp-mo-ba5",
            rating: 5,
            text:
              "Probably the best animal experience I've had yet in Singapore. It's pretty low key, not too many folks there at night, the tram ride is nice. But being able to walk around and see the animals at night was amazing. And seeing a pangolin up close blew my mind. Will definitely go back again.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.2,
        contact: {
          primaryContactNo: "+6562693411",
          secondaryContactNo: "",
        },
        companyDisplayName: "SINGAPORE ZOOLOGICAL GARDENS",
        pricing: {
          others:
            "Night Safari: Adult: S$57, Child: S$40 (3 - 12 years old),  Senior Citizen: S$22",
        },
        nearestMrtStation:
          "Ang Mo Kio Station / Choa Chu Kang Station / Marsiling Station / Woodlands Station / Khatib Station",
        amenities:
          "Shuttle to Places of Interest,Wheelchair Accessible,ATMs,Gift Shop,Carpark",
        categoryDescription: "Attractions",
        admissionInfo:
          "Night Safari: Adult: S$57, Child: S$40 (3 - 12 years old),  Senior Citizen: S$22\n\nNight Safari is open from Thursdays to Sundays, public holidays and eve of public holidays from 7pm to 11pm.",
        tags: [
          "Nightlife",
          "Animals",
          "Night",
          "Wildlife",
          "Outdoors",
          "Families",
          "Attractions",
          "Singapore Tourism Award",
        ],
        description:
          "With more than 1,000 creatures here, you can be sure that no two nights are ever the same at Night Safari. Whether you are exploring the wildlife park by tram or by foot, your night here is set to be wild.",
        source: "SINGAPORE ZOOLOGICAL GARDENS",
        group: "SGClean",
        address: {
          block: "80",
          streetName: "Mandai Lake Road",
          floorNumber: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "729826",
        },
        name: "Night Safari",
        location: {
          latitude: 1.4021872,
          longitude: 103.7880606,
        },
        type: "Nature & Wildlife",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "playatwakawaka.com",
        officialEmail: "info@playatwakawaka.com",
        staYear: "",
        businessHour: [
          {
            daily: true,
            openTime: "10:00",
            closeTime: "20:00",
            day: "daily",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "10:00",
            closeTime: "20:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 2,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>Waka Waka helps enhance various developmental skills through fun physical activity. From giant wave slides to challenging obstacle courses, Waka Waka is an adventure that guarantees a play experience like no other. There’s also a bistro and lounge area for the parents to kickback and relax while the children run wild.<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "10175d5f504bebe4d329755ca59e0ba0c25",
            uuid: "10175d5f504bebe4d329755ca59e0ba0c25",
            libraryUuid: "104ecf0f268704d408786d89d38d659e9d2",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101f6e1de957d684596b4a602a7c218c444",
            uuid: "101f12b02a6ac5d4af69cbcc9d452227647",
            libraryUuid: "1046c43c3c0fa114a7cbd65fafb742194da",
            url: "",
          },
          {
            primaryFileMediumUuid: "10175d5f504bebe4d329755ca59e0ba0c25",
            uuid: "1011c8ca9ecf81548928b798196433d54e3",
            libraryUuid: "104ecf0f268704d408786d89d38d659e9d2",
            url: "",
          },
        ],
        uuid: "00298d5e0df72f44c12ab4c32d9b7a5da1f",
        metadata: {
          createdDate: "2020-11-18T14:52:33Z",
          updatedDate: "2020-11-18T14:54:55Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Nasa Tjan",
            authorURL:
              "https://www.google.com/maps/contrib/101929843721379963733/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gg_WAFUO1d_vnFYJ-l1elPvCI7yFxp4MdJXf2bRnA=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            text:
              "Separate play areas for 18-months, toddlers, and older kids. Food canteen on premise. Entry is via lift next to Furama Riverfront lobby. Nice playground although staff could be more courteous.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Soon Heng",
            authorURL:
              "https://www.google.com/maps/contrib/108416528351532679112/reviews",
            profilePhoto:
              "https://lh6.googleusercontent.com/-vtk2EcztvMg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclc2ESgBRr5KUqfBEK_vfu6CduNfg/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
            rating: 4,
            text:
              "The area is good and has a separate area for 18mths and below but i feel that some of the area is quite dark",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Poh Hwee",
            authorURL:
              "https://www.google.com/maps/contrib/113772297758270985426/reviews",
            profilePhoto:
              "https://lh5.googleusercontent.com/-vCPv6WyBgq4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckKVVtRPixOV5cetuBnptp3wY92kA/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 1,
            text:
              "Weekend ticket is for 1 adult and 1 child. For another adult to enter, it’s another $23 which is the price for 1 adult and 1 child. This is the most unreasonable pricing that I’ve heard of. Other playground usually charge $3-$10 for an adult.\n\nThe staff asked me to sit outside with all the shoes. Moreover, this place is not located in a shopping mall.\nI definitely couldn’t spend quality family time with my family.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Chaplin Hong",
            authorURL:
              "https://www.google.com/maps/contrib/114584010074661740120/reviews",
            profilePhoto:
              "https://lh4.googleusercontent.com/-ks6haRqNvrY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnvVxH1g6ERBzYhS8JdRrl_CELrAw/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "Good place for the young children. Particularly love it how the staff eagerly control the crowd on arrival and departure",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Jez L",
            authorURL:
              "https://www.google.com/maps/contrib/111623614356778497628/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgeQtB_cEWnDuYo09UybH0tX20gzk90gAEzLGyTVsY=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 3,
            text:
              "Been a member for a year plus now but we hadnt had many chances to visit since covid, same issue for booking slots been taken up at fast pace well advance. Facilities are decent, suitable for post toddler kids as they have challenging activities to meet the hypers. Then we were quite skeptical about the rope used to climb the volcano as it stank real bad with different hands and perspiration. Hope that can be replaced with a better solution. Cleanliness can be slightly better maintained and worn out playtools and materials should also be given some restoration.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.2,
        contact: {
          primaryContactNo: "+6567387733",
          secondaryContactNo: "",
        },
        companyDisplayName: "PLAY AT WAKA WAKA PTE. LTD.",
        pricing: {
          others: "$25",
        },
        nearestMrtStation: "",
        amenities: "Free Wi-Fi,Carpark",
        categoryDescription: "Attractions",
        admissionInfo:
          "$25 on Weekends, School Holidays and Public Holidays. Admission for accompanying adult (maximum 1 per child) is free. Pre-booking of play time slots is required.",
        tags: ["Family-friendly", "Kids-friendly", "Families", "Kids"],
        description:
          "Waka Waka is a Safari-themed indoor playground for children from 9 months to 12 years old.",
        source: "PLAY AT WAKA WAKA PTE. LTD.",
        group: "",
        address: {
          block: "",
          streetName: "407 Havelock Rd",
          floorNumber: "05",
          unitNumber: "01",
          buildingName: "Annex@Furama",
          postalCode: "169634",
        },
        name: "Waka Waka",
        location: {
          latitude: 1.287815,
          longitude: 103.8356618,
        },
        type: "Others",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "https://www.vintagecamerasmuseumsg.com/",
        officialEmail: "ram@wemuseums.com",
        staYear: "",
        businessHour: [
          {
            daily: true,
            openTime: "11:00",
            closeTime: "19:30",
            day: "daily",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "11:00",
            closeTime: "19:30",
            day: "public_holiday",
            description: "",
            sequenceNumber: 2,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p><font face="Helvetica Neue, Helvetica, Arial, sans-serif">The Vintage Camera’s Museum is Singapore’s first and only museum dedicated entirely to antique photography. \nIts all-white camera-shaped building with an entrance shaped like a lens is hard to miss and its interior boasts a \ncollection just as impressive. With over 1,000 cameras on display, some dating from as far back as the 1800s,&nbsp; the museum is a photography enthusiast’s haven and a site where amateur photographers can get an in-depth understanding about \nthe history of photography. Its collection includes a six-metre-long Mammoth Camera as well as miniature spy cameras featured \nin movies such as James Bond. \nVisitors can also handle and try some of the cameras for themselves. Also has three documentaries about Pigeon camera, Spy camera and History of cameras Email to enquire about group deals and other offers.</font></p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><br></span><br></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "1014658dd2442974bc8a05586857f4e1e67",
            uuid: "1014658dd2442974bc8a05586857f4e1e67",
            libraryUuid: "104fb7818a0b16842e496eb7b01e5012127",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "1014658dd2442974bc8a05586857f4e1e67",
            uuid: "101844c03b64b7049079522823197e07eeb",
            libraryUuid: "104fb7818a0b16842e496eb7b01e5012127",
            url: "",
          },
          {
            primaryFileMediumUuid: "1018412d58f5db7458db75d4169aeb4624e",
            uuid: "10135f0a809cafd491db9a5f81cac3ae11d",
            libraryUuid: "1043d8a4a65228c4d17acd339cd1d2b5739",
            url: "",
          },
          {
            primaryFileMediumUuid: "101232ffed514dd428e89fb072ee4196dc7",
            uuid: "1016648cb83835e44a8ae3628c6dc97aec1",
            libraryUuid: "1041d4b7d8be2544e8b9a21256d983634e3",
            url: "",
          },
        ],
        uuid: "00261e8d494ffa24dfd973b72fb2eaf04d9",
        metadata: {
          createdDate: "2020-11-18T12:44:21Z",
          updatedDate: "2020-11-18T13:16:18Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Alessandro Del Ponte",
            authorURL:
              "https://www.google.com/maps/contrib/101245524277400116564/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gjoop2D2zpOE_wtoRbfvQ8LAq9qRmlFDBEtHHPs=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "Quaint and unique museum just steps away from Arab Street. The staff is extremely kind and knowledgeable. A very boutique experience. Definitely worth a detour. You will hardly find yourself in a museum in the shape of a camera ever again.\nThere is an astonishing variety of cameras of all ages and sizes. The instructional videos are helpful.\nAlso, the click art room with the painted illusions is really nice and the staff takes pictures of you.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Jing Pei Lin",
            authorURL:
              "https://www.google.com/maps/contrib/107317851641319600600/reviews",
            profilePhoto:
              "https://lh4.googleusercontent.com/-yAowGtt2yvI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmtZDL27nPNPL3OE_8P8qvb3EkheA/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg",
            rating: 5,
            text:
              "Small little museum and I would consider this a hidden find. Never knew there is a camera museum in Singapore. The person must have spent a bomb on the collections. Vintage and every milestone in photography, definitely an eye-opener. The tour was a good one, carried out by a photography enthusiast - brief and simple, what amazed me was the collection that is on display. Surprisingly spent longer than intended as we took a walk through history of photography in a small little space.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Tan Chin Fu - PerfectEdge",
            authorURL:
              "https://www.google.com/maps/contrib/117992110672307416300/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjzXjmzOLHupGjdYnbwt5MI2ZKim-gvv4KQF2nsIw=s128-c0x00000000-cc-rp-mo-ba5",
            rating: 5,
            text:
              "Loved the place !\nGreat knowledge abt cameras that he shared with us and even let us try some of the vintage cameras too..",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Chee Yuan Tan",
            authorURL:
              "https://www.google.com/maps/contrib/115446394360229761571/reviews",
            profilePhoto:
              "https://lh6.googleusercontent.com/-9NmQMr5MjLU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn_IjyFbTjskWj1y0mvBRoMWCODww/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            text:
              "Interesting place, very knowledgeable owner. Extensive history on cameras",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Joe Ng",
            authorURL:
              "https://www.google.com/maps/contrib/101412856189523387954/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiJUN6N2aGdxt7KrEmmqeebLauDYB1YWWksq48Pdw=s128-c0x00000000-cc-rp-mo-ba5",
            rating: 5,
            text:
              "$20 admission per adult. Small private museum that looks at the evolution of camera photography since the daguerreotype till early 21st century. Short videos and camera 'props' to allow self photography as souvenirs.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.5,
        contact: {
          primaryContactNo: "+6562912278",
          secondaryContactNo: "+6585918918",
        },
        companyDisplayName: "VINTAGE CAMERA'S MUSEUM PTE. LTD.",
        pricing: {
          others: "20/15",
        },
        nearestMrtStation: "Bugis, lavender",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "Adult - 20$\nStudents and Seniors - 15$",
        tags: [
          "Activities",
          "Family-friendly",
          "Entertainment",
          "Bugis",
          "Experiences",
          "Museums",
          "Families",
          "History",
          "Attractions",
          "Heritage",
          "Education",
          "Collectables",
          "Exhibitions",
          "Budget",
          "Sightseeing",
          "Antiques",
          "Culture",
        ],
        description:
          "CAMERA MUSEUM - TALKS ABOUT HISTORY AND TRANSFORMATION  OF CAMERAS",
        source: "VINTAGE CAMERA'S MUSEUM PTE. LTD.",
        group: "",
        address: {
          block: "8C / 8D",
          streetName: "JALAN KLEDEK",
          floorNumber: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "199263",
        },
        name: "VINTAGE CAMERA MUSEUM",
        location: {
          latitude: 1.303486,
          longitude: 103.858994,
        },
        type: "History & Culture",
      },
      {
        ticketed: "N",
        videos: [],
        documents: [],
        officialWebsite: "www.joochiatpopiah.com",
        officialEmail: "joochiatpopiah@gmail.com",
        staYear: "",
        businessHour: [
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "tuesday",
            description: "",
            sequenceNumber: 2,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "wednesday",
            description: "",
            sequenceNumber: 3,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "thursday",
            description: "",
            sequenceNumber: 4,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "friday",
            description: "",
            sequenceNumber: 5,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "saturday",
            description: "",
            sequenceNumber: 6,
          },
          {
            daily: false,
            openTime: "09:00",
            closeTime: "14:00",
            day: "sunday",
            description: "",
            sequenceNumber: 7,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          '<p>Kway Guan Huat has been delighting Singaporeans with popiah and kueh pie tee for more than three generations. Ours is a family business that still prepares many of the dish\'s main ingredients by hand to this day. </p><p>\nAs our late matriach is of Peranakan descent, the secret Nonya recipe she created for the main vegetable filling was passed down through the decades, offering our guests a rare opportunity to savor the exact same taste our forefathers did more than half a century ago.\n</p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">We make our popiah skin via the traditional method every morning, a spectacle which involves taming a fickle dollop of dough and deftly producing a thin white circle on hot pans that heat up to 200 ⁰c. </span>You can either watch our popiah masters perform their magic from 8 to 10 am, or sign up to one of our popiah tours <a href="http://www.joochiatpopiah.com/popiah-tours" target="_blank">here </a>and try your hand at this time-honored craft yourself!<br></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "10133d39818172d4c4cb3a4ea467f6a9c85",
            uuid: "10133d39818172d4c4cb3a4ea467f6a9c85",
            libraryUuid: "1048b250f17436f480e8caaf2196b090462",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "1018bbcf290bb3e49a7b2eadcf7658d2504",
            uuid: "101aaf61824c7d444f39365110595b57c10",
            libraryUuid: "104b392c2c67a1e478faefbc084cf9eca20",
            url: "",
          },
          {
            primaryFileMediumUuid: "1013d2d297bd7224028aa75f1acc50179ec",
            uuid: "1010ea2d39164b74ecc83692ab3dab8ad8a",
            libraryUuid: "10450e14fabbc3c4e6ab861d72f1aebd571",
            url: "",
          },
          {
            primaryFileMediumUuid: "10133e8500b42764b02ba95b290417d8a6d",
            uuid: "101bfdb337d80544bb88de70b429ef1c4b0",
            libraryUuid: "10451b5c1dcd83547ba854b2c28e70c6341",
            url: "",
          },
          {
            primaryFileMediumUuid: "10133d39818172d4c4cb3a4ea467f6a9c85",
            uuid: "10111004b9536314fec8acaad1feb1a67b0",
            libraryUuid: "1048b250f17436f480e8caaf2196b090462",
            url: "",
          },
          {
            primaryFileMediumUuid: "1014012b762f01242e9845bd653bcc6e016",
            uuid: "101207c1a369bc147a9a9e14a71cc1fd4cd",
            libraryUuid: "104064042fc492c4940b3ff106568395678",
            url: "",
          },
        ],
        uuid: "0026b87ef8b8e3344c4b24e7960fa436104",
        metadata: {
          createdDate: "2019-11-01T18:41:54Z",
          updatedDate: "2020-11-13T20:50:59Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Kelvin Chua",
            authorURL:
              "https://www.google.com/maps/contrib/109911014922466037656/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GiVsrBxg5Q5CNOIVyfCDoDyKmEe8Uvx7IqseYdQQNQ=s128-c0x00000000-cc-rp-mo-ba5",
            rating: 4,
            text: "Yummy",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Black Raven",
            authorURL:
              "https://www.google.com/maps/contrib/114385515451710838076/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjZQobCSeINTlvGWOwxttVRry5nm6zdAsJm0uLzCw=s128-c0x00000000-cc-rp-mo-ba4",
            rating: 5,
            text:
              "The popiah (spring roll) at this place is amazing. Long history, traditional formula passed down many generations. My family always buy the popiah skin from here, along with the chili, popiah sauce and other ingredients. I have not found a better place for popiah in Singapore...",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Melvin Chia",
            authorURL:
              "https://www.google.com/maps/contrib/103756268908876726392/reviews",
            profilePhoto:
              "https://lh4.googleusercontent.com/-b2wX7Q__n1c/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclAepAozHXFzXjcb_r7v-_KbZMLjQ/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
            rating: 4,
            text:
              "There are two sides to this place, one retailing the famous poh piah, the other is a zi char restaurant. We had lunch at the latter. Food quality was generally good. The Hokkien fried rice was interesting, regular egg fried rice semi submerged in a savoury gravy. The signature poh piah was almost bursting with ingredients, all of which tasted fresh and balanced on a crispy bottom with a sweet sauce. Overall, a satisfactory meal, will return if in the area.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Dom Wee",
            authorURL:
              "https://www.google.com/maps/contrib/100816623631168791184/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjDPyx_6kWt5fSUHh6t71suYAXFnumOMNkJDsfXUA=s128-c0x00000000-cc-rp-mo-ba5",
            rating: 3,
            text:
              "Very good popiah but extremely long wait when it's not crowded. There was no queue but still waited 20 minutes for takeaway 4 pieces",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Shermaine Tan",
            authorURL:
              "https://www.google.com/maps/contrib/114355022111160696825/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GgWohIoiQb_ceektasU_njuKsd-qUNDZP4DClgeKQ=s128-c0x00000000-cc-rp-mo-ba6",
            rating: 4,
            text:
              "Feels quite pricey here but the ambiance is somewhat homely and the food has great standard! I really like the chilli crab bomb (wrapped with yam and potato) and the tofu with spinach. The popiah, which is their speciality, isn't fantastic in my opinion. Would think that this is a decent place to bring parents to, but likely wouldn't make a special trip for the popiah.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 3.9,
        contact: {
          primaryContactNo: "+6563442875",
          secondaryContactNo: "",
        },
        companyDisplayName:
          "KWAY GUAN HUAT JOO CHIAT POPIAH (SINCE 1938) PTE. LTD.",
        pricing: {
          others: "",
        },
        nearestMrtStation: "EUNOS MRT STATION",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "Free admission",
        tags: [
          "Foodies",
          "Local Foods",
          "Food & Beverages",
          "Local Brands",
          "Tourists",
          "Singapore Food Festival",
          "Joo Chiat",
          "Restaurants",
          "Heritage",
        ],
        description: "A place where food meets heritage",
        source: "KWAY GUAN HUAT JOO CHIAT POPIAH (SINCE 1938) PTE. LTD.",
        group: "",
        address: {
          block: "95",
          streetName: "JOO CHIAT ROAD",
          floorNumber: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "427389",
        },
        name: "Kway Guan Huat Joochiat Popiah Shop",
        location: {
          latitude: 1.314055,
          longitude: 103.899118,
        },
        type: "Others",
      },
      {
        ticketed: "",
        videos: [],
        documents: [],
        officialWebsite:
          "https://globalblue-stag.agillic.eu/web/faces/public/exo/Singapore__New_Member__Shop_like_a_Tourist?&menu=true&resourcename=Watches+of+Switzerland&channel=web&anon=true",
        officialEmail: "vleong@globalblue.com",
        staYear: "",
        businessHour: [],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>With 21 luxury brands on-boarded to deliver the first Tax Free Shopping promotion in Singapore, Global Blue Members can shop TAX FREE. Register to enjoy the life of luxe this shopping season!<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101b3734882f2924fb9adb164ede329cc5a",
            uuid: "101b3734882f2924fb9adb164ede329cc5a",
            libraryUuid: "1044990ba154d3545ceab49e16a934a80b6",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101b3734882f2924fb9adb164ede329cc5a",
            uuid: "101627cc864803e4acba0d75bedb2ada4e1",
            libraryUuid: "1044990ba154d3545ceab49e16a934a80b6",
            url: "",
          },
        ],
        uuid: "0024b563ef1041a40aba15d111fbdaee35f",
        metadata: {
          createdDate: "2020-11-11T15:32:43Z",
          updatedDate: "2020-11-11T15:32:43Z",
        },
        supportedLanguage: ["EN"],
        reviews: [],
        rating: 0,
        contact: {
          primaryContactNo: "+6591165370",
          secondaryContactNo: "+6591165370",
        },
        companyDisplayName: "GLOBAL BLUE SINGAPORE",
        pricing: {
          others: "",
        },
        nearestMrtStation: "",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: ["Boutiques", "Year End Holidays", "Experiences", "Lifestyles"],
        description:
          "With 21 luxury brands on-boarded to deliver the first Tax Free Shopping promotion in Singapore, Global Blue Members can enjoy the exclusive lifestyle of luxe.",
        source: "GLOBAL BLUE SINGAPORE PTE. LTD.",
        group: "",
        address: {
          block: "",
          streetName: "",
          floorNumber: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "",
        },
        name: "Shop like a Tourist at Home!",
        location: {
          latitude: 1.304928,
          longitude: 103.832209,
        },
        type: "Leisure & Recreation",
      },
      {
        ticketed: "",
        videos: [],
        documents: [],
        officialWebsite:
          "https://www.ionorchard.com/event/christmas-light-show-magical-pinwheel-tree",
        officialEmail: "customercare@ionorchard.com.sg",
        staYear: "",
        businessHour: [
          {
            daily: true,
            openTime: "19:30",
            closeTime: "22:00",
            day: "daily",
            description: "",
            sequenceNumber: 1,
          },
          {
            daily: false,
            openTime: "19:30",
            closeTime: "22:00",
            day: "public_holiday",
            description: "",
            sequenceNumber: 2,
          },
        ],
        notes: "",
        temporarilyClosed: "N",
        body:
          "<p>Hope is in the air! Join us at our daily Christmas tree light shows at 7:30pm and 8:30pm at L1 ION2 from now till 3 January 2021.\n\n\n\n<br><br>Towering at almost 20 metres tall, the enchanting Magical Pinwheel Tree consists of a lighted inner core, adorned with more than 250 pinwheels generating a dynamic light sequence that brings the tree to life.<br></p>",
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "10163578e15bf594132952cf5452c49efe4",
            uuid: "10163578e15bf594132952cf5452c49efe4",
            libraryUuid: "104c2e39acf8768487cb1bcd65932ea55bb",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "10163578e15bf594132952cf5452c49efe4",
            uuid: "101bdb2f221c2694e83beb2b4325c8534ac",
            libraryUuid: "104c2e39acf8768487cb1bcd65932ea55bb",
            url: "",
          },
        ],
        uuid: "0025fc53a62cc734efebc199c8ba65a865a",
        metadata: {
          createdDate: "2020-11-11T14:39:25Z",
          updatedDate: "2020-11-11T14:40:37Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Stephanie Jump Taylor",
            authorURL:
              "https://www.google.com/maps/contrib/106639489298268824316/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GhEtUsT4s9hYAHA73pTn6Cfl_V2NsXKNb1bBBw6fw=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 2,
            text: "There used to be two grocery stores...now there are none.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Melissa",
            authorURL:
              "https://www.google.com/maps/contrib/106833425613028826118/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjeFWMan8MwCxsQ9AOKCbUoNgs0TtCNvUCODkfe=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "Excellent shopping Centre in the heart of Orchard Road, so many different variety of shops to choose from. All major brands are there. Basement level shops are great as well. Train stops at the centre. Great variety of food shops to choose from as well.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "c3",
            authorURL:
              "https://www.google.com/maps/contrib/105282087644559912249/reviews",
            profilePhoto:
              "https://lh6.googleusercontent.com/-_ovIt7f_njg/AAAAAAAAAAI/AAAAAAAAl-o/AMZuucmxQT8B_U2nqlHEFXQBOEf7t3H4NA/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg",
            rating: 2,
            text:
              "Listing restored on 21 Sept 2020 after 6 days of being hijacked by Gentle Monster (a glasses shop). But got hijacked again as of 25 September. Restored again circa 12 Oct.\n\nReported to the mall management but they didn't respond nor take action. Hence the negative review.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Sally Gerber",
            authorURL:
              "https://www.google.com/maps/contrib/101006890476745395480/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gh0YihHhHLUjX8JqT1FQ-zi55HXcW7j-ZZVCOOM=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 5,
            text:
              "Excellent shopping Centre in the heart of Orchard Road, so many different variety of shops to choose from. All major brands are there. Basement level shops are great as well. Train stops at the centre. Great variety of food shops to choose from as well.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Lauren Ooi",
            authorURL:
              "https://www.google.com/maps/contrib/109450500687220995214/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjoHS57vUmYFfqnOONthdnfUIGJD0y69OJhDFbDYrA=s128-c0x00000000-cc-rp-mo-ba4",
            rating: 4,
            text:
              "Upscale mall with amazing variety of shops. Bathrooms are clean and luxurious. Great network connectivity to the various surrounding malls.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.5,
        contact: {
          primaryContactNo: "+6562388228",
          secondaryContactNo: "",
        },
        companyDisplayName: "ORCHARD TURN RETAIL INVESTMENT PTE. LTD.",
        pricing: {
          others: "",
        },
        nearestMrtStation: "Orchard",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo: "",
        tags: [
          "Festivals",
          "Orchard Road",
          "Christmas",
          "Night",
          "Lights",
          "Malls",
          "Shopping",
        ],
        description: "Magical Pinwheel Tree",
        source: "ORCHARD TURN RETAIL INVESTMENT PTE. LTD.",
        group: "",
        address: {
          block: "2",
          streetName: "Orchard Turn",
          floorNumber: "",
          unitNumber: "",
          buildingName: "ION Orchard",
          postalCode: "238801",
        },
        name: "ION Orchard: Christmas Light Show",
        location: {
          latitude: 1.303414,
          longitude: 103.832267,
        },
        type: "Others",
      },
      {
        ticketed: "Y",
        videos: [],
        documents: [],
        officialWebsite: "ionorchard.com",
        officialEmail: "customercare@ionorchard.com.sg",
        staYear: "",
        businessHour: [],
        notes:
          "Each admission is 50 minutes; last admission at 5.00pm. Blackout dates apply.",
        temporarilyClosed: "Y",
        body:
          '<p>Join us at Southeast Asia’s first Jurassic World Cafe!&nbsp; Visit https://bit.ly/3llFOqL for more information.\n\n\n\nMeanwhile, you can still pre-book tickets for our well-loved ION Sky shows in January 2021.<br><br>Meanwhile, you can still pre-book tickets for our well-loved ION Sky shows in January 2021. Note: The validity for admission ticket(s) issued during the period from 19 September 2020 to 28 February 2021 (both dates inclusive) will be extended till 31 March 2021.<br><br><font face="Helvetica Neue, Helvetica, Arial, sans-serif">A new experience awaits you 56 levels above Orchard Road, 218 metres into the clouds at ION Sky. Surround yourself with sweeping 360° panoramic views of Singapore and enjoy ION Sky’s multimedia experience.&nbsp;<br></font><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><br>Now Showing:&nbsp;&nbsp;</span></p><p><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">- Adventures in Food Wonderland by Ang Ku Kueh Girl® and Friends™&nbsp;<br>Ang Ku Kueh Girl® and Friends™ put a charming twist on Asian food heritage and is an icon that evokes love and joy. Get to know Ang Ku Kueh Girl® and her friends, who are inspired by popular snacks in Singapore. An alien invasion disrupts their blissful lives in Food Wonderland! Follow these foodie friends on an exhilarating and flavourful adventure as they gear up for battle to protect Ang Ku Kueh Boy™, Ice Kachang Mountain, the Pink Bandung River and all that they hold dear. Spot local delights including nasi lemak, roti prata that can be found in eateries at ION Orchard and enjoy exclusive treats at participating stores, while servings last! Check in-store for availability and present a valid ION Sky admission ticket to redeem, T&amp;Cs apply. <br><br>- The Transformation of Orchard Road by DickLee<br>Discover the history of the city as you get a glimpse of what Singapore and Orchard Road used to look like when they were fruit orchards and nutmeg plantations and how it is transformed to how we are now, in an immersive multimedia experience by local singer-songwriter, DickLee.<br><br>Daily Showtimes: <br>- Adventures in Food Wonderland by Ang Ku Kueh Girl® and Friends™:  2PM, 4PM&nbsp;<br>- The Transformation of Orchard Road by DickLee:  3PM, 5PM<br></span><span style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><br>Download the ION Orchard mobile app (and login/sign up for ION+ Rewards) to redeem an admission ticket with every $20 spend in a single receipt.&nbsp;Each ticket is valid for 30 days from the date of issue, and you can accumulate up to 5 tickets at any one time.\n Booking can be done 7 days in advance. If you wish to visit ION Sky on the date of your purchase, please redeem for your admission ticket at our Concierge, tickets subject to availability.&nbsp;Children 12 years and below must be accompanied by an adult.</span></p><p><br>Blackout dates and other terms and conditions apply. Visit our Concierge or ionorchard.com for more details.<br></p>',
        dataset: "attractions",
        thumbnails: [
          {
            primaryFileMediumUuid: "101952c838769b14d009b00f574dfa58ee9",
            uuid: "101952c838769b14d009b00f574dfa58ee9",
            libraryUuid: "1048443387dffbd4ff286c22dbc0f1b8ece",
            url: "",
          },
        ],
        images: [
          {
            primaryFileMediumUuid: "101952c838769b14d009b00f574dfa58ee9",
            uuid: "101b7b6f9d1936b4f06bb37d640f2c89e90",
            libraryUuid: "1048443387dffbd4ff286c22dbc0f1b8ece",
            url: "",
          },
        ],
        uuid: "002c2a8f4f579f64b22b6228c7fd2c84dba",
        metadata: {
          createdDate: "2019-09-16T10:53:52Z",
          updatedDate: "2020-11-11T14:31:13Z",
        },
        supportedLanguage: ["EN"],
        reviews: [
          {
            authorName: "Adrian Koh",
            authorURL:
              "https://www.google.com/maps/contrib/115559999944316781764/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14GjqxO3vnqhWRSU99VNeDap4ONXlKKfLxCKKsovWHg=s128-c0x00000000-cc-rp-mo-ba4",
            rating: 3,
            text:
              "Taken over by a so called Jurassic Restaurant now. Need prior restaurant booking to access. Previously, even if accessible by the public, the hours are very limited, entry by 3pm.\n\nWould be great if they could make easier for these public to access.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Pretty Ang",
            authorURL:
              "https://www.google.com/maps/contrib/111551685201846303268/reviews",
            profilePhoto:
              "https://lh4.googleusercontent.com/-Wsc-9F91msg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnJySy3mh_ZGbtHFnOLg8Z-qwq8rA/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
            rating: 4,
            text:
              "Located at 56th floor ion.  I am checking it out tonight as just found the sky cafe changing...  This the menu for Dec,  I think also suitable for kids. Booking online,",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "Vienna",
            authorURL:
              "https://www.google.com/maps/contrib/103415808392827589559/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Ghqn-6Byyw-resHhUyzBWIQYtnNVwNJfW1hP91Qon0=s128-c0x00000000-cc-rp-mo-ba4",
            rating: 4,
            text:
              "The skyscrapers in the city center, but as the skyscrapers of the top cities, can only be regarded as passing standards.  The experience is still a bit worse than that of Japanese skyscrapers. There is a small commercial art exhibition on the fourth floor where you can buy some young artists' works.",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "CHEN JIAHAO",
            authorURL:
              "https://www.google.com/maps/contrib/100681976909300778514/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gg84tArPzXtjH3pCE7CPlEX4ezeSAW8rOEJd-601Q=s128-c0x00000000-cc-rp-mo-ba2",
            rating: 5,
            text:
              "Impressive scenery. I hope it can change to free access Singapore citizens at least",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
          {
            authorName: "وائل الشريف",
            authorURL:
              "https://www.google.com/maps/contrib/116736452234056807604/reviews",
            profilePhoto:
              "https://lh3.googleusercontent.com/a-/AOh14Gh9nN8dI6n2poUCO_ssb4KvGEiWm1WnG4cG_lJvRg=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            text:
              "It's a very nice place, have a lot of tourists and a good international brands",
            time: "2020-12-11T11:25:15Z",
            language: "en",
          },
        ],
        rating: 4.4,
        contact: {
          primaryContactNo: "+6562388228",
          secondaryContactNo: "",
        },
        companyDisplayName: "ORCHARD TURN RETAIL INVESTMENT PTE. LTD.",
        pricing: {
          others: "Redeemable with every $20 spend in a single receipt",
        },
        nearestMrtStation: "Orchard",
        amenities: "",
        categoryDescription: "Attractions",
        admissionInfo:
          "Download the ION Orchard mobile app (and login/sign up for ION+ Rewards) to redeem an admission ticket with every $20 spend in a single receipt. Other terms and conditions apply.",
        tags: [
          "Family-friendly",
          "Entertainment",
          "Central",
          "History",
          "Cityscape",
          "Orchard Road",
          "Corporate Events",
          "Lights",
          "Malls",
          "Shopping",
          "Shops",
          "Skyline",
          "Kids-friendly",
          "Architecture",
          "Experiences",
          "Families",
          "Attractions",
          "Kids",
          "Sunset",
          "Indoors",
          "Luxury",
          "Tourists",
          "Luxuries",
          "Landmarks",
          "Sightseeing",
        ],
        description: "Singapore's top skyline on Orchard Road",
        source: "ORCHARD TURN RETAIL INVESTMENT PTE. LTD.",
        group: "",
        address: {
          block: "2",
          streetName: "Orchard Turn",
          floorNumber: "",
          unitNumber: "",
          buildingName: "ION Orchard, Level 55/56",
          postalCode: "238801",
        },
        name: "ION Orchard: ION Sky",
        location: {
          latitude: 1.303414,
          longitude: 103.832267,
        },
        type: "Leisure & Recreation",
      },
    ],
  },
  nextToken:
    "MNXW2LTTORRC45DJNAXGG33SMUXG233EMVWC4Q3PNZ2GK3TUKJSWMRDBORQVGZLUKNSWC4TDNBJGK43VNR2CKN2DEU3UGMZXGASTOQZFG5BTEMBFG5BSKN2DGIYCKN2DEU3UG23FPF3W64TEEUZUIJJXIMSTOQ3EMF2GC43FOQSTGRDBOR2HEYLDORUW63TTEU3UGJJXINUXGUDSNF3GC5DFEUZUIZTBNRZWKJJXIMSTOQ3TN5ZHIQTZEUZUIJJXIMSTOQ3TN5ZHIT3SMRSXEJJTIQSTOQZFG5BWYYLOM52WCZ3FEUZUIZLOEU3UGJJXINTXE33VOASTGRBFG5BSKN2D",
};

export default sample;
