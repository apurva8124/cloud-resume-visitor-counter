# cloud-resume-visitor-counter
Production-ready serverless resume website on AWS with real-time visitor counter using S3, API Gateway, Lambda, and DynamoDB.
# 🚀 Cloud Resume Platform with Serverless Visitor Analytics

## 📌 Project Overview

This project is a **production-ready cloud-based resume platform** built using AWS serverless technologies.
It hosts a personal resume on the cloud and tracks real-time visitor count using a scalable backend.

The goal of this project is to demonstrate **end-to-end cloud architecture skills**, including frontend hosting, backend APIs, database integration, and cloud security.

---

## 🏗️ Architecture

```
CloudFront (CDN)
      ↓
S3 (Static Website Hosting)
      ↓
JavaScript (Fetch API)
      ↓
API Gateway
      ↓
AWS Lambda (Backend Logic)
      ↓
DynamoDB (Visitor Counter Database)
```

🔹 Architecture Diagram

Flow:

User → S3 → API Gateway → Lambda → DynamoDB

## 🛠️ Tech Stack

### ☁️ Cloud Services (AWS)

* Amazon S3 – Static website hosting
* Amazon CloudFront – CDN for fast global delivery
* API Gateway – REST API management
* AWS Lambda – Serverless compute
* DynamoDB – NoSQL database
* IAM – Secure access control
* CloudWatch – Logging and monitoring
* Route 53 – Custom domain (optional)

---

## ⚙️ Features

* 🌐 Fully serverless architecture
* ⚡ Real-time visitor counter
* 🔒 Secure API integration
* 📊 Scalable and cost-efficient backend
* 🚀 Fast content delivery using CDN
* 📈 Monitoring with CloudWatch

---

## 🔄 How It Works

1. Resume is hosted on **S3**
2. User visits the website
3. JavaScript sends a request via **Fetch API**
4. API Gateway triggers **Lambda function**
5. Lambda updates visitor count in **DynamoDB**
6. Updated count is returned and displayed on UI

---

## 📂 Project Structure

```
cloud-resume-project/
│
├── frontend/
│   └── index.html
│
├── backend/
│   └── lambda_function.py
│
├── infrastructure/
│   └── (Terraform / CloudFormation - optional)
│
├── .github/workflows/
│   └── deploy.yml (CI/CD Pipeline)
│
└── README.md
```

---

## 🚀 Deployment Steps

1. Upload frontend to S3
2. Enable static website hosting
3. Configure CloudFront distribution
4. Create API Gateway endpoint
5. Deploy Lambda function
6. Connect Lambda with DynamoDB
7. Integrate API with frontend
8. (Optional) Add custom domain via Route 53

---

## 🔐 Security Best Practices

* IAM roles with least privilege
* HTTPS enabled via CloudFront
* API Gateway request validation
* Logging and monitoring with CloudWatch

---

## 📸 Demo

👉 Add your live project link here (S3/CloudFront URL)

---

## 🙏 Acknowledgement

This project was built as part of the **AWS Foundation Certification Program**.

Special thanks to:

* **HV Desai (Haribhai V. Desai) College** for providing the opportunity
* **Shubhada Ma'am** for guidance and support
* **Vaishali Ma'am** for continuous encouragement

---

## 💡 Future Enhancements

* Visitor analytics dashboard
* Geo-location tracking
* Authentication system (Admin panel)
* Infrastructure as Code (Terraform)
* CI/CD automation with GitHub Actions

---

## ⭐ Conclusion

This project showcases practical implementation of **cloud-native and serverless architecture**, making it a strong portfolio project for roles in **Cloud, DevOps, and Backend Development**.

---

## 📬 Connect With Me

(Add your LinkedIn / GitHub profile links here)
