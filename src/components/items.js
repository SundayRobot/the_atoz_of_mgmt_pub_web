const items = [
    {
      letter: "a",
      word: "agile way of working",
      type: "noun",
      supportingtext:
        "This is various methodologies and practices that enable product and software development teams to communicate frequently and deliver working features, over shorter periods of time. E.g. delivering {new navigation feature} every {x} days. If you’re managing a publishing website it's important to understand key events such as Sprint Planning, Refinement and Retrospectives,  as well as methodologies such as Epics and User stories as you'll need to maintain these with each Sprint. For a publishing website this means that any updates to the site, in terms of how it looks, performs, data it holds or the systems it relies on, will go through this iterative process. Working in this way also makes it easy to communicate to stakeholders when a significant piece of development is likely to be present on the site.",
      tags: {
        skills: true,
        tasks: false,
        understanding: true,
        responsibility: true,
        tools: false,
        experience: true
      }
    },
    {
      letter: "a",
      word: "acceptance criteria",
      type: "noun",
      supportingtext:
        "The acceptance criteria, are a specific list of requirements that have to be in place in order for a feature to be delivered. They can also help with testing, as they lay out what conditions have to be met in order for tests to pass QA. Gathering requirements and writing A/Cs is something you’ll have to do a lot of in order to ensure that new features on the website work as expected and don’t effect how books are displayed.",
      tags: {
        skills: false,
        tasks: true,
        understanding: true,
        responsibility: true,
        tools: false
      }
    },
    {
      letter: "a",
      word: "actual behaviour",
      type: "verb",
      supportingtext:
        "This details how an item within a system or website is currently behaving. Actual behaviour is usually outlined in a bug / issue ticket, where you’re illustrating how something is no longer working. Typically, you’ll add this information before you then add details about how something is expected to work. See also: expected behaviour.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "b",
      word: "backlog",
      type: "noun",
      supportingtext:
        "This is a queue of tickets. These tickets can be tasks, stories or bugs, that are placed into Epics and organised in order of priority. In this role it's important to keep the backlog up to date by deleting items that are no longer relevant and prioritising ticket items for upcoming Sprints.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: true,
        tools: false,
        experience: true
      }
    },
    {
      letter: "b",
      word: "blocker(s)",
      type: "noun",
      supportingtext:
        "A known or unknown issue that impedes the progress of a feature. It’s basically anything that could stop a feature being delivered ( on time ). From the start to the end of a Sprint you want to ensure that you're aware of these (via daily stand ups or ad-hoc meetings), remove them where possible and mitigate them going forward. See also: delivery date.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "c",
      word: "can you put that into a ticket?",
      type: "noun",
      supportingtext:
        "You get asked this ...a lot. Whether online or offline, the above question tends to be how most conversations end. Being able to effectively gather information and placing it into a ticket is something you'll do on a routine basis.",
      tags: {
        skills: true,
        tasks: true,
        understanding: true,
        responsibility: true,
        tools: false
      }
    },
    {
      letter: "c",
      word: "cms",
      type: "noun",
      supportingtext:
        "The CMS, or the content management system is the tool that holds content and products. It will hold this information, then send it to another system or service, which will then run a few other processes in order display it as the books and content (articles, quizzes etc) on the site. Typically, you need to ensure that the CMS ingests data (books and content), holds it, updates it correctly and feeds it to other systems as it’s supposed to. You tend to work on multiple websites these of which can be supported by different CMS platforms. Overtime you'll become an expert in how to use these systems so that you can spot irregularities, bugs and opportunities for improvement. Lastly, most CMSs are used by various groups, so one of the key tasks you carry out is managing CMS release notes, ommunicating to users and training them on new or existing functionality.",
      tags: {
        skills: true,
        tasks: true,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "d",
      word: "delivery date / due date (aka go live)",
      type: "verb",
      supportingtext:
        "This is the date when features, new functionality or updates have to be available for people to see and use, on a website, or an internally used system such as a CMS. Ideally you want to ensure that blockers don't push the date forward into the future. Delivery dates are important to keep on top of, especially if a book title or book series is dependent on a piece of development being present on a certain date.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "d",
      word: "documentation",
      type: "noun",
      supportingtext:
        "Sacrilege in agile but anytime a new feature is added, removed or updated and it’s something that will affect users, documentation is needed. It doesn’t have to be hundreds of pages, just relevant enough for users to understand how to use a new or updated feature and continue with their work. ",
      tags: {
        skills: true,
        tasks: true,
        understanding: true,
        responsibility: true,
        tools: true
      }
    },
    {
      letter: "e",
      word: "estimate",
      type: "noun",
      supportingtext:
        "The estimated amount of time it takes to complete a ticket. Sprints have a start and end date. Estimates can be added against development tickets to give an understanding of how each team members' time is likely to be used, or left over, during the course of the sprint. Based on estimates you can see how many tickets you're likely to complete during the sprint and what is likely to be delivered to users. If you’re leading a sprint planning session you can ask for estimates for the tickets that are going into a sprint. But note that an estimate is just that, an estimate. It only provides an indication of what could be completed at the end a sprint. ",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "e",
      word: "expected behaviour",
      type: "noun",
      supportingtext:
        "This details how something is expected to behave. Expected behaviour is usually outlined in a bug ticket where you’ve illustrated how something that is no longer working as expected should work. Typically, you’ll add this information after detailing how something is actually working.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "f",
      word: "formats",
      type: "noun",
      supportingtext:
        "Formats are either physical (e.g. hardback, paperback, flexibound) or digital (e.g. ebooks, audiobooks). Publishers typically produce books in specific formats, a publishing website would need to support all these formats by ensuring that when they appear on the various webpages, they appear in a manner that meets brand guidelines and UI specifications, whilst providing visitors with the relevant information about its contents. In this role you need to ensure that formats are appearing as expected and also co-ordinate the addition of any new formats to the site. ",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "g",
      word: "g-example-to-follow",
      type: "noun",
      supportingtext:
        "words coming soon",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },

    {
      letter: "h",
      word: "have you tried refreshing the page?",
      type: "noun",
      supportingtext:
        "This is so simple, but can answer a number of questions in one click. When in doubt about why an update isn’t displaying on a page ...try refreshing it. ",
      tags: {
        skills: false,
        tasks: true,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "i",
      word: "inspect element",
      type: "noun",
      supportingtext:
        "This is a helpful browser tool that you can use for many things. Managing a publishing website you can use it for troubleshooting, to investigate why an element on the page isn't following style guidelines. Additionally, you can also use it to communicate UI style recommendations, by making alterations of the HTML and CSS on real page templates.",
      tags: {
        skills: true,
        tasks: true,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "j",
      word: "jira",
      type: "noun",
      supportingtext:
        "Where everything is managed. You’ll use this to organise the backlog, plan goes into Sprints and move tickets through their workflow (to-do, in progress, QA, done) once a sprint starts.",
      tags: {
        skills: true,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "k",
      word: "kanban",
      type: "noun",
      supportingtext:
        "An agile methodology that allows you to manage work via a continuous process, by placing the work you need to complete into columns that indicate the progress of those work items. In this role you can use Kanban to manage your workload.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: true,
        tools: true
      }
    },
    {
      letter: "l",
      word: "lapsing a domain",
      type: "noun",
      supportingtext:
        "Not renewing a domain, before it expires. When one is no longer needed this is something you might have to coordinate.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "m",
      word: "markup validation service ",
      type: "noun",
      supportingtext:
        "If you have to use html to create webpages outside of existing page templates then this is a helpful took to ensure that your HTML is valid.",
      tags: {
        skills: false,
        tasks: true,
        understanding: true,
        responsibility: true,
        tools: false
      }
    },
    {
      letter: "m",
      word: "meetings",
      type: "noun",
      supportingtext:
        "These are typically daily Stand Ups, Sprint Planning, Refinement, Retrospectives and Regular meetings with stakeholders. They range from 15 - 90 minutes, but they always have an agenda and intended outcomes before they start.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "n",
      word: "no content at present",
      type: "noun",
      supportingtext:
        "Words will be soon.",
      tags: {
        skills: false,
        tasks: false,
        understanding: false,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "0",
      word: "opus formats for audio",
      type: "noun",
      supportingtext:
        "A file format for audio. As audiobooks start to be produced you can create audiobook samples, in addition to mp3 you can create samples that are in this format. If you have a site that is built to manage audio you can add samples, to enhance audiobooks that might be on the site. ",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "p",
      word: "production",
      type: "noun",
      supportingtext:
        "Aka the production environment, the version of the website you / visitors see.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "q",
      word: "qa",
      type: "noun",
      supportingtext:
        "This is an essential part of software development that involves ensuring that developed features work as expected and don't break any existing functionality. In this role you typically need to ensure that new features are workflowed to the QA team and get a pass before they proceed further in development workflow. ",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "r",
      word: "redirects",
      type: "noun",
      supportingtext:
        "Aka 301 redirects. When a webpage can no longer be used or is no longer accessible, or content for that page has moved to a new url, you might have to coordinate a redirect to be created. This will mean that when a user arrives at the old url they are redirected to the newer url and can access the content they need seamlessly. Ensuring that these are in place is not a routine task, however, if you’re doing a large content migration project you might have to manage a large number of these.",
      tags: {
        skills: false,
        tasks: true,
        understanding: true,
        responsibility: true,
        tools: false
      }
    },
    {
      letter: "s",
      word: "slack",
      type: "noun",
      supportingtext:
        "A meeting room you never have to book in advance.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "t",
      word: "training",
      type: "noun",
      supportingtext:
        "In addition to ensuring that documentation is available, you sometimes need to introduce users to a new system or a new part of that system so that they create amazing content which then appears on the website, this is the training",
      tags: {
        skills: true,
        tasks: true,
        understanding: true,
        responsibility: true,
        tools: false
      }
    },
    {
      letter: "t",
      word: "testing",
      type: "noun",
      supportingtext:
        "The best part of the job. Typically, this means carrying out manual exploratory tests.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "u",
      word: "u-example-to-follow",
      type: "noun",
      supportingtext:
        "Words to follow. ",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    
    {
      letter: "v",
      word: "vanity url",
      type: "noun",
      supportingtext:
        "This is a short, custom url, on a publishing website this is usually put in place to support marketing efforts. Once it is used / clicked on it will take users to a pre-existing webpage on the site. You don’t create these, you simply need to manage the request, work with the dev team to ensure that the url is up and working on or before the due date.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "w",
      word: "w-example-to-follow",
      type: "noun",
      supportingtext:
        "Words to follow",
      tags: {
        skills: false,
        tasks: false,
        understanding: false,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "x",
      word: "xml",
      type: "noun",
      supportingtext:
        "A tool that carries information. In the context of a publishing website XML is found in the ONIX files, these of which hold information or metadata for a book. These files will usually be sent to your CMS. The CMS will then read the information from these files, run a series of processes, before translating that information into book jackets, book price and book title information which is then displayed on the website. In this role it helps to know what a typical XML ONIX file looks like and the type of information it should hold, so that you can easily discover errors should something be missing.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    },
    {
      letter: "y",
      word: "you have too many tabs open",
      type: "noun",
      supportingtext:
        "Had nothing for this letter entry, but honestly, this is often true. To be more productive, it helps to have fewer tabs open, that way you know what to focus on. ",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: false
      }
    },
    {
      letter: "z",
      word: "zeplin",
      type: "noun",
      supportingtext:
        "This tool and can be thought of as a large canvas which holds UI designs. You can use it to verify whether or not an element on a webpage is appearing as expected when it’s static and when it’s being interacted with.",
      tags: {
        skills: false,
        tasks: false,
        understanding: true,
        responsibility: false,
        tools: true
      }
    }
  ];
  
  export default items;
  