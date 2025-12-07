export const sql_about_me = {
  query: "SELECT ABOUT FROM PEOPLE WHERE PERSON = 'Shagun Mohta' order by YEAR desc ;",
  file: "AboutMe.sql",
  results: [{
    "about": "I’m a Data Engineer graduating from IIIT Delhi with a B.Tech in Computer Science and Economics (GPA: 8.19/10), currently working at Micron Technology.\n" +
      "My technical expertise spans Snowflake, large-scale data ingestion, and building robust ETL pipelines using tools such as Apache NiFi, Coalesce, and ActiveBatch. I also bring working knowledge of full-stack development, including the MERN stack for frontend applications and REST APIs for backend services.\n\nAt Micron, I’ve contributed end-to-end to the People Analytics Platform—developing semantic models in Snowflake Cortex, integrating agentic AI workflows, building interactive Angular dashboards, and engineering scalable ETL pipelines. I also support data quality and validation processes to ensure reliable consumption of insights by business users.\n\nBeyond work, I volunteer actively—teaching, organizing events, and hosting community initiatives. I have earned recognition in multiple tech domains and enjoy solving complex problems that sit at the intersection of data, systems, and user impact."
  }]

}

export const keywords = ['SELECT', "ELSE", "END", "EXCEPT", "EXISTS", "DISTINCT",
  "QUALIFY",
  "FROM",
  "BY",
  "GROUP",
  "HAVING", "ASC", "DESC",
  "IN", "INNER", "INSERT", "INTO", "IS",
  "JOIN",
  "KEY",
  "LEFT", "LIKE", "LIMIT",
  "NOT", "NULL",
  "ON", "OR", "ORDER", "OUTER",
  "TABLE", "TOP", "TRUNCATE",
  "UNION",
  "VALUES",
  "VIEW",
  "WHERE", "WHEN", "WITH"]

export const sql_education = {
  query: "SELECT YEAR, INSTITUTE , GRADE , FIELD FROM EDUCATION ORDER BY GRADUATION_YEAR DESC ;",
  file: "Education.sql",


  "results": [
    {
      "year": 2024,
      "institute": "Indraprastha Institute of Information Technology, Delhi (IIIT Delhi)",

      "grade": 8.19,
      "field": "Bachelor of Technology — Computer Science and Social Sciences (CSSS)"
    },
    {
      "year": 2019,
      "institute": "Lovely Public Sr. Sec School, Delhi",

      "grade": 94.6,
      "field": "Class 12 — Science (PCM)"
    },
    {
      "year": 2017,
      "institute": "Lovely Public Sr. Sec School, Delhi",

      "grade": 10,
      "field": "Class 10 — CBSE"
    }
  ]



}

export const sql_work = {
  query: "SELECT * FROM WORK_EXPERIENCE order by start_date desc ;",
  file: "Work_Ex.sql",
  
  "results": [
    {
      "company": "Micron Technology",
      "role": "Data Engineer",
      "location": "Hyderabad",
      "timeline": "Jul 2024 – Present",
      "key_achievement": "Led the end-to-end development of Micron’s People Analytics Platform, covering data modeling, pipeline engineering, and product-facing components. This included building semantic models in Snowflake Cortex to standardize HR data, integrating agentic AI workflows to enable conversational insights, designing interactive Angular dashboards for business stakeholders, and engineering scalable ETL pipelines using NiFi, Coalesce, and ActiveBatch to ensure reliable, automated data delivery.",
      "start_date": "2024-07-15"
    },
    {
      "company": "ServiceNow",
      "role": "Data Analytics Intern — Finance Analytics Team",
      "location": "Hyderabad",
      "timeline": "May 2023 – Jul 2023",
      "key_achievement": "Developed, implemented, and rigorously tested complex SQL queries within Snowflake to design and populate tables capturing critical company metrics for the ServiceNow KPI dashboard. This involved ensuring data accuracy, integrity, and accessibility while aligning with access control policies. In the process, I explored and applied advanced query optimization techniques, which resulted in a 20.69% improvement in the performance of an existing view. Additionally, I validated and tested data across multiple scenarios to ensure reliability and correctness.",
      "start_date": "2023-05-19"
    },
    {
      "company": "TavLab (IIIT Delhi)",
      "role": "Undergraduate Researcher",
      "location": "Delhi",
      "timeline": "Sep 2023 – Mar 2024",
      "key_achievement": "I worked on applying modern machine learning architectures to generate novel, computationally designed SARS-CoV-2 protein sequences with the goal of exploring vaccine-relevant variations. My work focused on evaluating these generated candidates for properties such as antigenicity, structural stability, and similarity to the reference Wuhan strain. This involved using computational assessment tools like DDgun, NetMHCpan, and AlphaFold to understand how these model-generated sequences might behave biologically, allowing us to identify variants with improved immune-response potential and better resilience to mutational drift.",
      "start_date": "2023-09-01"
    },
    {
      "company": "IIIT Delhi",
      "role": "Teaching Assistant — Introduction to Programming",
      "location": "Delhi",
      "timeline": "Aug 2023 – Dec 2023",
      "key_achievement": "Mentored 300+ first-year B.Tech students, conducted tutorials, resolved weekly doubts, and evaluated assessments for a cohort of 25+ learners.",
      "start_date": "2023-08-01"
    }
  ]






}

export const sql_project = {
  query: "SELECT * EXCLUDE (STATUS) FROM PROJECTS WHERE STATUS = 'COMPLETED' ; ",
  file: "Projects.sql",
  
  "results": [
    {
      "project": "Rainfall Prediction and Analysis",
      "description": "Performed exploratory data analysis and daily rainfall prediction using 10 years of Australian meteorological data (100k+ rows, 20+ features). Benchmarked multiple ML classifiers—including Naive Bayes, SVM, Logistic Regression, Random Forest, AdaBoost, and XGBoost—and achieved the highest accuracy (79.8%) using AdaBoost with depth=8 and n-components=5. Conducted data wrangling, visualization, and evaluation using Python libraries.",
      "tech_stack": "Python, Pandas, NumPy, Matplotlib, Scikit-learn",
      "link": "https://github.com/Shagun20/ML_Project",
      "timeline": "Feb 2023 – Apr 2023"
    },
    {
      "project": "Course Recommendation System",
      "description": "Built a real-time course recommendation tool by scraping IIIT Delhi’s course tech tree and mapping prerequisites to generate academic pathways. Used Sentence-BERT embeddings and cosine similarity to match student preferences with relevant courses. Delivered recommendations instantly through a Flask-based web interface.",
      "tech_stack": "Python, Flask, BeautifulSoup, Sentence-BERT, HTML/CSS",
      "link": "https://github.com/Shagun20/Course-Recommender",
      "timeline": "2023"
    },
    {
      "project": "ULA Cabs — Online Ride Booking System",
      "description": "Developed an OLA-style cab booking platform with user authentication, ride selection, driver assignment, and fare logic. Designed the ER diagram and normalized database schema while applying OOPS concepts such as abstraction and redundancy control for modular backend logic. Implemented using Flask and MySQL.",
      "tech_stack": "HTML, CSS, JavaScript, Python Flask, MySQL",
      "link": "https://github.com/shagun/ula-cabs",
      "timeline": "Feb 2022 – Apr 2022"
    },
    {
      "project": "Will Hero Game Adaptation",
      "description": "Designed and developed a desktop adaptation of the Will Hero game using JavaFX. Implemented collision mechanics, animations, scene transitions, and event-driven game logic. Built 15+ modular OOPS-based game entities and added state serialization for saving and restoring progress.",
      "tech_stack": "Java, JavaFX (SceneBuilder)",
      "link": "https://github.com/diyaahuja/Will-Hero",
      "timeline": "Nov 2021 – Dec 2021"
    }
  ]



}

export const sql_skills = {
  query: "SELECT domain , ARRAY_AGG (skills) AS skills FROM skills GROUP BY domain ;",
  file: "Skills.sql",
  
  "results": [
    {
      "domain": "Data Engineering",
      "skills": "[Snowflake, Apache NiFi, SQL, Coalesce, ActiveBatch, GCP]"
    },
    {
      "domain": "Backend Development",
      "skills": "[Python, Node.js, Express.js, REST APIs, MySQL]"
    },
    {
      "domain": "Frontend/UI",
      "skills": "[React, Angular, JavaScript, Bootstrap, HTML/CSS]"
    },
    {
      "domain": "Leadership & Teaching",
      "skills": "[Leadership, Team Building, Teaching]"
    }
  ]



}

export const sql_extra = {
  query: "SELECT * FROM EXTRA_CURRICULAR_LOG QUALIFY YEAR >= 2016 ORDER BY YEAR DESC;",
  file: "Extra_Curriculars.sql",
  results: [
    {
      "timeline": "Jan'25 - Present",
      "year": 2025,
      "location": "Smai Engagement Committee",
      "role": "Member",
      "description": "Currently participating in SMAI Engagement Committee initiatives, contributing to student engagement and outreach activities.",
      "type": "Leadership / Volunteer"
    },
    {
      "timeline": "Jan'25 - Oct'25",
      "year": 2025,
      "location": "Chotu Ki Education",
      "role": "Volunteer / Trainer",
      "description": "Helping primary grade teachers build confidence in essential computer skills like Excel. Through hands-on training and personalized support, improving their efficiency and technology adoption.",
      "type": "Volunteer / Teaching"
    },
    {
      "timeline": "March'22 - Dec'24",
      "year": 2024,
      "location": "IIITD",
      "role": "Content Lead / Core Member",
      "description": "Content Lead and Core Member of Meraki - IIITD Art Society, curating creative projects and workshops.",
      "type": "Leadership"
    },
    {
      "timeline": "Feb'22 - June'23",
      "year": 2023,
      "location": "IIITD",
      "role": "Core Member / Events Lead",
      "description": "Core Member at ACM IIITD and Events Lead at Girl Up Udaan IIITD, organizing tech and social events.",
      "type": "Leadership / Volunteer"
    },
    {
      "timeline": "Sep'22 - Jan'23",
      "year": 2023,
      "location": "IIITD",
      "role": "Events Team Lead",
      "description": "Led Odyssey’s official event, engaging 100+ college students from across Delhi.",
      "type": "Leadership"
    },
    {
      "timeline": "Sep'22 - Dec'22",
      "year": 2022,
      "location": "IIITD",
      "role": "Teaching Assistant",
      "description": "Assisted in the course M3 - Multivariable Calculus, supporting students in lectures, tutorials, and assignments.",
      "type": "Teaching"
    },
    {
      "timeline": "July'22 - August'22",
      "year": 2022,
      "location": "IIITD",
      "role": "Outreach Committee Member",
      "description": "Member of IIITD Student Senate Outreach Committee; organized IIITD Open House 2022 and assisted in Convocation 2022.",
      "type": "Volunteer"
    }
  ]
}


export const sql_contact = {
  query: "SELECT DISTINCT PHONE , EMAIL , LINKEDIN  FROM PEOPLE WHERE PERSON = 'Shagun Mohta';",
  file: "Contact.sql",

  results: [{ "phone": "91 8920841818", "email": "shagunmohta2025@gmail.com", "linkedin": "www.linkedin.com/in/shagun-mohta-9012041b8" }]
}

export const sql_courses = {
  query: "SELECT DISTINCT DOMAIN , COURSE_NAME , COURSE_LINK FROM SKILLS ; ",
  file: "Certificates.sql",
  results: [
    {
      "domain": "Data Engineering",
      "course_name": "Snowflake Fundamentals Workshop | 3-Day Hands-On Training",
      "course_link": "Snowflake"
    },
    {
      "domain": "Backend Development",
      "course_name": "Developing Back-End Apps with Node.js and Express",
      "course_link": "IBM"
    },
    {
      "domain": "Frontend/UI",
      "course_name": "Developing Front-End Apps with React",
      "course_link": "IBM"
    },
    {
      "domain": "AI / Machine Learning",
      "course_name": "Generative AI for Everyone",
      "course_link": "DeepLearning.AI"
    },
    {
      "domain": "Frontend/UI",
      "course_name": "Angular - The Complete Guide",
      "course_link": "Udemy"
    },
    {
      "domain": "Data Engineering / SQL",
      "course_name": "The Structured Query Language",
      "course_link": "University of Colorado Boulder"
    },
    {
      "domain": "Cloud / Data Engineering",
      "course_name": "Google Cloud Engineering Track",
      "course_link": "Google"
    }
  ]
}







