class feature {
    constructor(img, title, body) {
        this.img = img;
        this.title = title;
        this.body = body;
    }
}
let feature1 = new feature("assets/teacher-svgrepo-com.svg", "Real-time teacher oversight with deep data visibility", "Teachers can monitor all sellers, orders, batches, and progress instantly - with tools to group data, assign tasks, and even give assistants controlled access.")
let feature2 = new feature(
    "assets/student-person-3-svgrepo-com.svg",
    "Simple student onboarding with join codes and schedule tracking",
    "Students join fundraisers with a quick code, and uploaded schedules ensure they're available and accountable for fulfilling orders.")
let feature3 = new feature(
    "assets/tag-svgrepo-com.svg",
    "Automatic tags, smart batches, and print-ready labels",
    "Tags and batches generate themselves based on order information, eliminating handwriting and cutting hours of manual sorting.")
let feature4 = new feature(
    "assets/qr-code-svgrepo-com.svg",
    "App-free buying with instant QR codes",
    "Buyers simply scan a QR code to order - no downloads, no friction, and no barriers to supporting the fundraiser.")
let feature5 = new feature(
    "assets/verified-svgrepo-com.svg",
    "Accurate, verified orders marked complete by sellers",
    "Orders only appear in the teacher's final view once the assigned student confirms completion, ensuring clean, reliable data every time.")
let feature6 = new feature(
    "assets/finances-stats-bars-graphic-with-up-arrow-svgrepo-com.svg",
    "Smart financial tracking with expenses and trend analysis",
    "All expenses, projected revenue, and performance insights are automatically tracked — helping teachers run smarter, more profitable fundraisers.")

let features = [feature1, feature2, feature3, feature4, feature5, feature6]
let box = document.getElementById("cardHolder")
//feature Loader
features.map((feature) => {
    let featureCard = document.createElement('div')
    featureCard.classList.add("card")
    featureCard.innerHTML = `<img src="${feature.img}">
                    <div>
                        <div>
                            <p class="header">${feature.title}</p>
                            <p class="body">${feature.body}</p>
                        </div>
                        <a href="html/signUp.html">Learn More</a>
                    </div>`
    box.appendChild(featureCard)
})
//Docs Object
class Docs{
    constructor(img, header, body, link){
        this.img = img
        this.header = header
        this.body = body
        this.link = link
    }
}


let docsBox = document.getElementById("docsHolder")
let Doc1 = new Docs("assets/account-svgrepo-com.svg","Creating an account", "Learn how to quickly create your account, choose your role, and get connected to your school's fundraiser in just a few steps.","")
let Doc2 = new Docs("assets/school-svgrepo-com.svg","Add your own school", "Add your own school in order to create the central overview for everyone and simplify the entire process.","")
let Doc3 = new Docs("assets/donate-charity-donation-coin-fund-svgrepo-com.svg","Getting Started With Your Fundraiser", "A quick walkthrough of setting up your first fundraiser, from choosing your item to activating your student seller page.","")
let Doc4 = new Docs("assets/workers-team-svgrepo-com.svg","How Students Join and Start Selling", "Shows students how to sign up, access their seller dashboard, and start sharing their QR code to make sales instantly.","")
let Doc5 = new Docs("assets/sale-free-1-svgrepo-com.svg","Understanding Orders & Fulfillment", "Covers how orders come in, how sellers confirm fulfillment, and how teachers stay updated on progress.","")
let Doc6 = new Docs("assets/printing-print-products-svgrepo-com.svg","Managing Batches & Print Labels", "Learn how to generate tags, organize batches, and print pick-ready labels without extra software.","")
let Doc7 = new Docs("assets/dashboard-svgrepo-com.svg","Teacher Dashboard Overview", "A simple guide to viewing sales, tracking student activity, reviewing batches, and keeping your fundraiser on schedule.","")
let Doc8 = new Docs("assets/admin-svgrepo-com.svg","Admin Controls & Permissions", "Explains how school admins manage multiple fundraisers, assign roles, and control access levels.","")
let Doc9 = new Docs("assets/calendar-days-svgrepo-com.svg","Setting Up Seller Schedules", "Shows teachers how to upload schedules and automatically match sellers with times they're actually available.","")
let Doc10 = new Docs("assets/graph-svgrepo-com.svg","Financial Tracking & Reports", "Teaches users how to view revenue, expenses, profit projections, and download reports for your school.","")
let Doc11= new Docs("assets/share-svgrepo-com.svg","Sharing Your Fundraiser (QR, Links, Social)", "Covers all sharing options so students, parents, and supporters can access your fundraiser in seconds—no app required.","")
let Doc12= new Docs("assets/multiple-documents-files-svgrepo-com.svg","Managing Multiple Fundraisers at Once", "A guide for teachers and admins who run several campaigns at the same time, with tips for staying organized.","")


let docs = [Doc1, Doc2, Doc3, Doc4, Doc5, Doc6, Doc7, Doc8, Doc9, Doc10, Doc11, Doc12]

docs.map((doc)=>{
    let featureCard = document.createElement('div')
    featureCard.classList.add("card")
    featureCard.style.display = "flex"
    featureCard.style.flexDirection = "column"
    featureCard.style.alignItems = "center"
    featureCard.style.width = "280px"
    featureCard.style.height = "200px"
    featureCard.innerHTML = `
                    <img src="${doc.img}">
                    <div>
                        <div>
                            <p class="header" style="text-align: center;">${doc.header}</p>
                            <p class="body" style="text-align: center; font-size: 16px;">${doc.body}</p>
                        </div>
                        <a href="${doc.link}" style="display: flex; align-items: center; text-decoration: none;">Start Now<span class="material-icons" style="font-size: 12px;">
                                play_arrow
                            </span></a>
                    </div>`
    docsBox.appendChild(featureCard)
})

//Feeadback Object
class Feedback{
    constructor(avatar, title, comment){
        this.avatar = avatar
        this.title = title
        this.comment = comment
    }
}

let feedback1 = new Feedback("assets/avatar-svgrepo-com (1).svg","Achmed Rui - Pharaoh of Egypt","Everything feels so organized now. I finally know where all my student orders are.")
let feedbacks= [feedback1]
let feedBox = document.getElementById("feedHolder")
feedbacks.map((feed)=>{
    let feedCon = document.createElement("div")
    feedCon.classList.add("feedback-card")
    feedCon.innerHTML = ` <img src="${feed.avatar}">
                    <h3>${feed.title}</h3>
                    <p>"${feed.comment}”</p>`
    feedBox.appendChild(feedCon)
    
})