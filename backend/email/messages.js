const registerMessage = (mail, mailMessage) => {
  // <head>{/* <link rel="stylesheet" href="cid:style.css" /> */}</head>
  const maildata = `
    <html>
      <body>
        ${mail.fromAcct} says hi from node
      </body>
    </html>
  `;

  const testMailText = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="cid:styles.css">

        <link rel="preconnect" href="https://fonts.gstatic.com">

        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

        <script src="https://kit.fontawesome.com/8a5d044514.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="user-icon col">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="col">
                        <div class="logo-container">
                            <a href=""> <img src="RanedaLogoIsolated.png" alt="" class="logo"> </a>
                        </div>
                    </div>
                    <div class="shopping-cart col" >
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col list">
                        <a href="" class="an">CONTACT</a>
                    </div>
                    <div class="col list">
                        <a href="" class="an">SHOP</a>
                    </div>
                    <div class="col list">
                        <a href="" class="an">SERVICES</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="productInformation">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="image-holder">
                            <div>
                                <img src="cid:BLACKACROBONNET.png" alt="" class="productImage">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="details-holder">
                            <div class="productName">
                                Acro bonnet
                            </div>
                            <div class="productPrice">₦5000</div>
                            <div>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="heading-text">DESCRIPTION</div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="sub-header">
                        PRODUCT DETAILS
                    </div>
                    <div class="attributes">
                        1. Attribute 1<br>
                        2. Attribute 2<br>
                        3. Attribute 3<br>
                        4. Attribute 4<br>
                        5. Attribute 5
                    </div>
                </div>
                <div class="col">
                    <div class="sub-header">
                        ABOUT ME
                    </div>
                    <div class="about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi in, corrupti ullam velit perferendis nemo eos est dolorem porro molestiae esse veritatis autem. Quaerat eligendi nulla reiciendis. Cumque, laboriosam.
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
`;

  return {
    text: "i hope this works",
    from: mail.fromAcct,
    to: mail.toAcct,
    cc: mail.toAcctCC ? mail.toAcctCC : "",
    subject: mail.subject,
    attachment: [
      { data: testMailText, alternative: true },
      {
        path: "./files/css/styles.css",
        type: "text/css",
        headers: { "Content-ID": "<styles.css>" },
      },
      {
        path: "./files/images/RanedaLogoIsolated.png",
        type: "image/png",
        headers: { "Content-ID": "<RanedaLogoIsolated.png>" },
      },
      {
        path: "./files/images/BLACKACROBONNET.png",
        type: "image/png",
        headers: { "Content-ID": "<BLACKACROBONNET.png>" },
      },
    ],
  };
};

export { registerMessage };
