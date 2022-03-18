<template>
    <div>
        <div class="testimonial">
            <div class="flex">
                <div class="testimonial-img-section">
                    <img alt="Dean Haskell headshot" class="testimonial-img" src="https://res.cloudinary.com/btdigital/image/upload/v1647570004/dean_haskell.png" />
                </div>
                <div class="testimonial-body">
                    <p>My business partner and I contracted with Brandon to build a website for our company, National Retail Concept Partners, LLC. Brandon kept us engaged at every step of the process and helped us determine the look, feel, and functionality that we wanted to achieve with the site. Working remotely did not impact the final product as we had frequent conversations wherein we reviewed the webpage and placed change orders as needed. He was able to pivot quickly when necessary, and was always available to communicate. Aside from his technical skills, he was very professional and easy to work with. Our firm continues to contract with Brandon (BT Digital) on an ongoing basis.</p>
                    <div>
                        <h3 class="remove-margin">Dean Haskell</h3>
                        <p class="remove-margin">Co-Founder, National Retail Concept Partners, LLC</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial">
            <div class="flex">
                <div class="testimonial-img-section">
                    <img alt="Christie McElhinney headshot" class="testimonial-img" src="https://res.cloudinary.com/btdigital/image/upload/v1550806889/2992bc1_hgnply.jpg" />
                </div>
                <div class="testimonial-body">
                    <p>I have had the privilege of partnering with Brandon on a number of diverse projects over the past several years and recommend him highly. In addition to his excellent technical skills in developing engaging and effective websites and growing email marketing and social media reach and engagement, Brandon relishes new challenges, has a can-do attitude and is unfailingly competent. From operating within a big, bureaucratic system to a cutting-edge grassroots campaign, Brandon is able to quickly take in what is needed, thoroughly research possibilities, and identify and deliver quality solutions and products. In addition to providing quality work, Brandon is a pleasure to work with!</p>
                    <div>
                        <h3 class="remove-margin">Christie McElhinney</h3>
                        <p class="remove-margin">Principal, Third Sector Communication Strategies</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial">
            <div class="flex">
                <div class="testimonial-img-section">
                    <img alt="Susan Kiely headshot" class="testimonial-img" src="https://res.cloudinary.com/btdigital/image/upload/v1550806888/AAEAAQAAAAAAAAy_AAAAJGU3ZWIyNjE5LWNkZjYtNDMyZi1hNjA4LTZkMWY1ZTgzMzEwNQ_rswgwr.jpg" />
                </div>
                <div class="testimonial-body">
                    <p>Recently I had the wonderful experience of meeting and working with Brandon Ellis. Brandon is creative and diligent. Our website, Women With A Cause need an update and he was just the person to take on the task. I would recommend Brandon for any IT project that is on the top of your list!</p>
                    <div>
                        <h3 class="remove-margin">Susan Kiely</h3>
                        <p class="remove-margin">CEO, Women With A Cause Foundation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeTestimonialsItems"
}
</script>

<style scoped>
    .testimonial {
        background-color: rgb(242,242,242);
        padding: 20px;
        border-radius: 5px;
        margin: 15px 0px;
    }

    .testimonial-img-section {
        width: 15%;
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }

    .testimonial-img {
        width: 100px;
        height: 100px;
        border-radius: 50% 50%;
    }

    .testimonial-body {
        width: 82%;
        text-align: justify;
    }

    @media (max-width: 500px) {
        .testimonial {
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
        }

        .flex {
            flex-direction: column;
        }

        .testimonial-body {
            width: 100%;
        }
    }

    @media (max-width: 1073px) {
        .testimonial-img-section {
            width: 30%;
        }

        .testimonial-body {
            width: 70%;
        }
    }

</style>