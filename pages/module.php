<?php include('../includes/header.php'); ?>
    <title>Module Grade Calculator | Calculate your university module and year grades with ease! | GradeCalc</title>
    <meta name="title" content="Module Grade Calculator | Calculate your university module and year grades with ease! | GradeCalc"/>
    <meta property="og:title" content="Module Grade Calculator | Calculate your university module and year grades with ease! | GradeCalc"/>
<?php include('../includes/header1.php'); ?>

<section class="main">
    <div class="row">
        <div class="small-12 large-12 columns">
            <h2>Module Grade Calculator</h2>
        </div>
        <div class="small-12 large-8 columns text-center">
            <form id="modulecalc" method="post">
                <div class="row">
                    <div class="small-12 large-4 columns">
                        <p>Grade</p>
                    </div>
                    <div class="small-12 large-4 columns">
                        <p>Weighting</p>
                    </div>
                    <div class="small-12 large-4 columns">
                        <p>Weighted Grade</p>
                    </div>
                </div>
                <div class="row">
                    <div class="small-12 large-12 columns">

                        <div class="row">
                            <div class="small-12 large-4 columns">
                                <input type="number" name="grade[]" required>
                            </div>
                            <div class="small-12 large-4 columns">
                                <input type="number" name="weighting[]" required>
                            </div>
                            <div class="small-12 large-4 columns">
                                <p class="wg0">

                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="small-12 large-4 columns">
                                <input type="number" name="grade[]" required>
                            </div>
                            <div class="small-12 large-4 columns">
                                <input type="number" name="weighting[]" required>
                            </div>
                            <div class="small-12 large-4 columns">
                                <p class="wg1">

                                </p>
                            </div>
                        </div>

                        <?php
                            for ($idx = 2; $idx < 6; $idx++) { ?>
                                <div class="row">
                                    <div class="small-12 large-4 columns">
                                        <input type="number" name="grade[]">
                                    </div>
                                    <div class="small-12 large-4 columns">
                                        <input type="number" name="weighting[]">
                                    </div>
                                    <div class="small-12 large-4 columns">
                                        <p class="wg<?php print $idx; ?>">

                                        </p>
                                    </div>
                                </div>
                            <?php }
                        ?>
                    </div>
                    <div class="small-12 large-3 columns">
                        <input type="submit" value="Calculate" class="button small expand success">
                    </div>
                    <div class="small-12 large-3 columns">
                        <input id="reset" type="reset" value="Reset" class="button small expand alert">
                    </div>
                    <div class="small-12 large-3 columns">
                        <a id="help" class="button small expand warning">Help</a>
                    </div>
                    <div class="small-12 large-3 columns">
<!--                        Functionality coming soon-->
<!--                        <input type="reset" value="Save" class="button small expand">-->
                    </div>
                </div>
            </form>
        </div>
        <div class="large-4 small-12 columns">
            <div class="wg text-center"></div>
        </div>
        <br>
        <div class="small-12 large-4 columns help-text text-justify">
            <h3>Help</h3>
            <p>To use this calculator, you will need to know two things:</p>
            <ul>
                <li>Your grade for any assignment(s) you wish to calulate and</li>
                <li>What percentage the assignment(s) were worth of the module (weighting)</li>
            </ul>
            <p>This calculator will work out the weighted grade of the assignment for the module and add it with other weighted grades to reach a total</p>
        </div>
</section>

<?php include('../includes/footer.php'); ?>