export const sql_about_me = {
  query: "SELECT ABOUT FROM PEOPLE WHERE PERSON = 'Shagun Mohta' order by YEAR desc ;",
  file: "AboutMe.sql",
  results: [{}]

}

export const keywords = ['SELECT', "ELSE", "END", "EXCEPT", "EXISTS","DISTINCT",
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
  query: "SELECT INSTITUTE , GRADUATION_YEAR , GPA , FIELD FROM EDUCATION ORDER BY GRADUATION_YEAR DESC ;",
    file: "Education.sql",

  results: [
  {
    "institute": "Pune Institute of Computer Science",
    "graduation_year": 2021,
    "gpa": 3.85,
    "field": "Computer Science Engineering"
  },
  {
    "institute": "St. Xavier’s College, Kolkata",
    "graduation_year": 2018,
    "gpa": 3.72,
    "field": "Mathematics & Data Science"
  },
  {
    "institute": "Don Bosco School, Kolkata",
    "graduation_year": 2015,
    "gpa": 3.90,
    "field": "Science (PCM)"
  }
]

}

export const sql_work = {
  query: "SELECT * FROM WORK_EXPERIENCE order by start_year asc",
  file: "Work_Ex.sql",
  results: [
  {
    "start_year": 2019,
    "end_year": 2021,
    "company": "TechNest",
    "role": "Junior Analyst",
    "location": "Bengaluru",
    "key_achievement": "Built SQL dashboards monitoring product KPIs; improved adoption by 15%"
  },
  {
    "start_year": 2021,
    "end_year": 2023,
    "company": "BlueCore Technologies",
    "role": "Data Analyst",
    "location": "Mumbai",
    "key_achievement": "Designed data quality framework; automated 40+ recurring reports"
  },
  {
    "start_year": 2023,
    "end_year": 2025,
    "company": "QuantifyAI",
    "role": "Associate Data Engineer",
    "location": "Hyderabad",
    "key_achievement": "Implemented Snowflake Streams/Tasks ETL; reduced pipeline latency by 32%"
  },
  
]

}

export const sql_project = {
  query: "SELECT * EXCLUDE (STATUS) FROM PROJECTS WHERE STATUS = 'COMPLETED' ",
  file: "Projects.sql",
  results: [
  {
    "project": "Snowflake Cost Optimizer",
    "description": "Automated query analyzer that detects high-cost queries and suggests compute optimizations.",
    "tech_stack": "Snowflake, Python, Streamlit, Snowsight Dashboards",
    "link": "https://github.com/shagun/snowflake-cost-optimizer"
  },
  {
    "project": "Real-Time ETL Pipeline",
    "description": "End-to-end streaming pipeline using NiFi and Snowflake Streams/Tasks for near real-time ingestion.",
    "tech_stack": "Apache NiFi, Snowflake, Python, Kafka",
    "link": "https://github.com/shagun/realtime-etl"
  },
  {
    "project": "Personal Portfolio Engine",
    "description": "Dynamic portfolio system rendered as SQL queries, inspired by Snowsight UI design.",
    "tech_stack": "React, Bootstrap, Node.js, Snowflake (mock layer)",
    "link": "https://github.com/shagun/sql-portfolio"
  },
  {
    "project": "Data Quality Monitor",
    "description": "Automated DQ checks with alerts, profiling, anomaly detection, and SLA monitoring.",
    "tech_stack": "Python, SQL, Airflow, BigQuery/Snowflake",
    "link": "https://github.com/shagun/dq-monitor"
  }
]

}

export const sql_skills = {
  query: "SELECT DOMAIN",
  file: "Skills.sql",
  results: [
  {
    "domain": "Data Engineering",
    "skill_ranking": [
      "Snowflake",
      "SQL",
      "Apache NiFi",
      "Airflow"
    ]
  },
  {
    "domain": "Backend Development",
    "skill_ranking": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB"
    ]
  },
  {
    "domain": "Machine Learning",
    "skill_ranking": [
      "Python",
      "scikit-learn",
      "Pandas",
      "Feature Engineering"
    ]
  },
  {
    "domain": "Frontend/UI",
    "skill_ranking": [
      "React",
      "JavaScript",
      "Bootstrap",
      "HTML/CSS"
    ]
  }
]

}

export const sql_extra={
  query: "SELECT * FROM EXTRA_CURRICULAR_LOG QUALIFY YEAR >= 2016 ORDER BY YEAR DESC ;",
  file: "Extra_Curriculars.sql",
  results: [
  {
    "timeline": 2024,
    "location": "Bengaluru Tech Summit",
    "role": "Speaker",
    "description": "Delivered a talk on modern Data Engineering patterns using Snowflake."
  },
  {
    "timeline": 2021,
    "location": "GitHub",
    "role": "Contributor",
    "description": "Contributed utilities for SQL linting and Snowflake query optimization."
  },
  {
    "timeline": 2019,
    "location": "Hyderabad",
    "role": "Team Lead",
    "description": "Won a campus hackathon by building a real-time data pipeline using Python."
  },
  {
    "timeline": 2016,
    "location": "Pune",
    "role": "Coordinator",
    "description": "Organized coding & analytics workshops for junior students."
  }
]

}

export const sql_contact ={
  query: "SELECT DISTINCT PHONE , EMAIL , LINKEDIN  FROM PEOPLE WHERE PERSON = 'Shagun Mohta';",
    file: "Contact.sql",

  results:[{"phone": "91 8920841818", "email": "shagunmohta2025@gmail.com", "linkedin": "www.linkedin.com/in/shagun-mohta-9012041b8"}]
}

export const sql_hobbies ={
  query: "SELECT DISTINCT HOBBY FROM PEOPLE WHERE PERSON = 'Shagun Mohta'",
    file: "Hobbies.sql",

  results:[{"hobby": "painting"},{"hobby": "badminton"}, {"hobby": "reading"} ]
}




