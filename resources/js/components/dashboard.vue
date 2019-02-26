<template>
    <div>

<div class="wrapper">
<dashboard_header/>
        <!-- =============================================== -->

        <!-- Left side column. contains the sidebar -->

<side-bar/>
        <!-- =============================================== -->

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    Blank page
                    <small>it all starts here</small>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Examples</a></li>
                    <li class="active">Blank page</li>
                </ol>
            </section>

            <!-- Main content -->
            <section class="content">

               <widget/>

            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

<footer/>

</div>
    </div>
</template>

<script>
    import header from './mainlayout/header';
     import sidebar from './mainlayout/sidebar';
    import footer from './mainlayout/footer';
    import widget from './mainlayout/widget'
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components:{
          'dashboard_header':header,
            'side-bar':sidebar,
            'footer':footer,
            'widget':widget

        }
    }
</script>
