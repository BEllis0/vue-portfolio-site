USE heroku_35743ff02913178;

-- #Users table
CREATE TABLE admin_users (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(50) NOT NULL,
    admin_password VARCHAR(250) NOT NULL 
);

-- #Profile table
CREATE TABLE profile (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED,
    profile_name VARCHAR(50) NOT NULL DEFAULT "Champ",
    job_title VARCHAR(100) DEFAULT '',
    profile_bio VARCHAR(500) DEFAULT '',
    profile_img_url VARCHAR(300) DEFAULT '',
    profile_phone_number VARCHAR(12) DEFAULT '',
    profile_address VARCHAR(100) DEFAULT '',
    profile_email_address VARCHAR(100) DEFAULT '',
    profile_social_linkedin_url VARCHAR(100) DEFAULT '',
    profile_social_facebook_url VARCHAR(100) DEFAULT '',
    profile_social_youtube_url VARCHAR(100) DEFAULT '',
    profile_social_twitter_url VARCHAR(100) DEFAULT '',
    profile_social_github_url VARCHAR(100) DEFAULT '',
    profile_social_codepen_url VARCHAR(100) DEFAULT '',
    profile_social_tableau_url VARCHAR(100) DEFAULT '',
    FOREIGN KEY (user_id)
        REFERENCES admin_users(id)
        ON DELETE CASCADE
);

-- #Web Design table
CREATE TABLE web_designs (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(100) NOT NULL,
    website_url VARCHAR(100) DEFAULT '',
    priority_level INT(2) NOT NULL
);

-- #Web Applcations table
CREATE TABLE web_applications (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    application_name VARCHAR(100) NOT NULL,
    website_url VARCHAR(100) DEFAULT '',
    priority_level INT(2) NOT NULL
);

-- Testimonials
CREATE TABLE testimonials (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    author VARCHAR(50) NOT NULL,
    author_img_url VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) DEFAULT '',
    company  VARCHAR(50) DEFAULT '',
    company_website VARCHAR(50),
    body VARCHAR(500) NOT NULL
);

-- Web Design Images
CREATE TABLE web_design_images (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    project_id INT UNSIGNED NOT NULL,
    img_url VARCHAR(200) NOT NULL,
    alt_text VARCHAR(250) NOT NULL,
    FOREIGN KEY (project_id)
        REFERENCES web_designs(id)
        ON DELETE CASCADE
);

-- Web Application Images
CREATE TABLE web_application_images (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    project_id INT UNSIGNED NOT NULL,
    img_url VARCHAR(200) NOT NULL,
    alt_text VARCHAR(250) NOT NULL,
    FOREIGN KEY (project_id)
        REFERENCES web_applications(id)
        ON DELETE CASCADE
);