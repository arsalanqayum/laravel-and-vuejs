<template>
    <div>
        <div class="section-padding-top padding-bottom-90">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-header">
                            <h2>Top Companies</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <carousel class="" :nav="false" :margin="5" :items="5" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false},768:{items:5,nav:false}}">

                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-1.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">Digoin</a></h4>
                                    <span>Kansas City, Missouri</span>
                                    <a href="job-listing.html" class="button">4 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-2.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">Orion Ltd.</a></h4>
                                    <span>Sacramento, California</span>
                                    <a href="job-listing.html" class="button">2 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-3.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">Realhouse</a></h4>
                                    <span>London, United Kingdom</span>
                                    <a href="job-listing.html" class="button">4 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-4.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">BioPro</a></h4>
                                    <span>Ajax, Ontarioland</span>
                                    <a href="job-listing.html" class="button">1 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-1.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">Digoin</a></h4>
                                    <span>Kansas City, Missouri</span>
                                    <a href="job-listing.html" class="button">4 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-2.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">Orion Ltd.</a></h4>
                                    <span>Sacramento, California</span>
                                    <a href="job-listing.html" class="button">2 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-3.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">Realhouse</a></h4>
                                    <span>London, United Kingdom</span>
                                    <a href="job-listing.html" class="button">4 Open Positions</a>
                                </div>
                            </div>
                            <div class="company-wrap">
                                <div class="thumb">
                                    <a href="#">
                                        <img src="../../../../public/images/company/company-logo-4.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="body">
                                    <h4><a href="employer-details.html">BioPro</a></h4>
                                    <span>Ajax, Ontarioland</span>
                                    <a href="job-listing.html" class="button">1 Open Positions</a>
                                </div>
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import carousel from 'vue-owl-carousel'
    export default{
        data(){
            return{

            }
        },
        components:{
            carousel
        }
    }
</script>