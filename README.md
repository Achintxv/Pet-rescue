# 🐾 Pawfect Rescue - Adopt & Support Rescue Animals

## 📌 Project Overview
**Pawfect Rescue** is a web-based platform designed to connect rescue animals with loving homes and to encourage community support through donations. Users can browse pets available for adoption, view detailed profiles, and contribute to the rescue mission by donating funds that directly help these animals.

---

## 🚀 Features

### 🏡 Adoption Features
- **Pet Listings**: Browse available pets with images, breed, and location details.
- **Search & Filter**: Easily find pets by breed.
- **Adoption Inquiry**: View detailed pet profiles and initiate the adoption process.

### 🎨 User Experience
- **Interactive Animations**: Smooth transitions, hover effects, and intuitive interface.
- **Dark Mode (Upcoming)**: Enhance accessibility and user preference (coming soon).

### 💖 Support & Community
- **Donation Page**: Secure donation form connected to a PostgreSQL database backend.
- **Sponsor Section (Planned)**: Showcase supporting organizations and sponsors.
- **Social Media Links (Planned)**: Share and spread awareness.

---

## 🛠️ Technologies Used

| Layer        | Technologies                      |
|--------------|----------------------------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+)   |
| **Backend**  | Node.js with Express (suggested) |
| **Database** | PostgreSQL                       |

- **FontAwesome** - Icons for social media.
- **PostgreSQL** - Secure storage for donation data.

---

## 📂 File Structure
```
Pet-Rescue/
│
├── index.html            # Home page (Pet Listings)
├── indexdog.html         # Dog adoption page (Pet Listings)
├── indexcat.html         # Cat adoption page (Pet Listings)
├── indexanimal.html      # Animal adoption page (Pet Listings)
├── adopt.html            # Detailed Pet Profile page
├── donate.html           # Donation form page
│
├── style.css             # General styling for dog, cat and other animal webpage
├── styles.css            # General styling
├── adopt.css             # Styling specific to adoption pages
├── donation.css          # Styling specific to donation page
│
├── script.js             # Homepage logic (search/filter)
├── adopt.js              # Adopt page functionality
├── donation.js           # Handles donation form submission (Frontend)
│
├── server.js             # Node.js/Express backend server
├── db.js
│
└── README.md             # Project documentation
```

---

## 📋 Setup & Usage

### 1. **Clone the repository**
```bash
git clone https://github.com/Achintxv/Pet-rescue.git
```

### 2. **Frontend (Static Files)**
- Open `index.html` in your browser to explore pet listings.
- Visit `donate.html` to view the donation form.

### 3. **Backend (Server & Database)**
#### Prerequisites:
- Node.js & npm
- PostgreSQL installed and configured

#### Steps:
1. Navigate to the project folder.
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up the PostgreSQL database:
   ```sql
   CREATE DATABASE pet_rescue;
   ```
4. Create the `donations` table:
   ```sql
   CREATE TABLE donations (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       amount DECIMAL(10, 2) NOT NULL,
       donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
5. Start the backend server:
   ```bash
   node server.js
   ```

---

## ✨ Future Improvements
- **User Authentication & Profiles**: Users can sign up, log in, and track their adoptions.
- **Admin Panel**: Add, edit, or remove pet listings and manage donations.
- **Payment Gateway Integration**: For secure online donations.
- **Volunteer & Foster Applications**: Get involved beyond donations and adoptions.
- **Pet Matching AI (Future)**: Recommend pets based on user preferences.

---

## ✨ Contributors
| Name           | GitHub Profile                           | Contributions                                                  |
|----------------|------------------------------------------|---------------------------------------------------------------|
| Achint Verma   | [@Achintxv](https://github.com/Achintxv) | JavaScript, Backend, Database Setup, Testing & Debugging |
| Nikhil Kumar  | [@nikhil0019](https://github.com/nikhil0019) | Html and Image Integration, Testing & Debugging |
| Khushi Dhruw  | [@kdhruw05](https://github.com/kdhruw05) | CSS, Website Designing, Page Layout, Testing & Debugging |

---

## 💌 Contributing
Want to make **Pawfect Rescue** even better?  
- Open an issue for suggestions or bugs  
- Fork the repository and create a pull request  
   
🐾 **Adopt, Don’t Shop! Help give rescue pets a second chance!**

---
