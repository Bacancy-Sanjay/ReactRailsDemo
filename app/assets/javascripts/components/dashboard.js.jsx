
var Dashboard = React.createClass({

  render: function()  {
     return (
            <section>
                <div className="content-heading bg-white">
                    <Row>
                        <Col sm={9}>
                            <h4 className="m0 text-thin">
                            <span data-localize="WELCOME">Welcome to </span>
                            Centric dashboard</h4><small>Bootstrap admin dashboard template</small>
                        </Col>
                        <Col sm={3} className="text-right hidden-xs">
                            <button type="button" className="mt-sm btn btn-labeled btn-default ripple">Apps<span className="btn-label btn-label-right"><i className="ion-plus-round"></i></span></button>
                        </Col>
                    </Row>
                </div>
                <Grid fluid>
                    <Row>
                        <Col xs={4} lg={4}>
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={4} lg={4}>
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">10,200</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-down-b"></em>Page views</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline1" data-line-color="#03A9F4" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={4} lg={4} className="visible-lg">
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">880</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>Last income</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline3" data-line-color="#ab47bc" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9} md={12}>
                            <Row>
                                <Col lg={8}>
                                    <div className="card">
                                        <div className="card-heading">
                                            <div className="card-title">Pie</div>
                                        </div>
                                        <div className="card-body">
                                            <div id="pie-flotchart" className="flot-chart flot-chart-lg"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="card">
                                        <div className="card-heading">
                                            <div className="pull-right">
                                                <p className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>20%</p>
                                            </div>
                                            <div className="card-title">Earnings</div><small>Based on last month analytics.</small>
                                        </div>
                                        <div className="card-body">
                                            <div role="group" aria-label="..." className="btn-group btn-group-sm">
                                                <button type="button" className="btn btn-default btn-xs btn-default">2015</button>
                                                <button type="button" className="btn btn-default btn-xs btn-default">2016</button>
                                            </div>
                                            <div id="flot-stacked-chart" data-height="245px" className="flot-chart"></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} >
                                    <Col xs={4} lg={4}>
                                      <div className="card">
                                          <div className="card-body pv">
                                              <div className="clearfix">
                                                  <div className="pull-left">
                                                      <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                                  </div>
                                                  <div className="pull-right mt-lg">
                                                      <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    </Col>
                                    <Col xs={4} lg={4}>
                                      <div className="card">
                                          <div className="card-body pv">
                                              <div className="clearfix">
                                                  <div className="pull-left">
                                                      <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                                  </div>
                                                  <div className="pull-right mt-lg">
                                                      <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    </Col>
                                    <Col xs={4} lg={4}>
                                      <div className="card">
                                          <div className="card-body pv">
                                              <div className="clearfix">
                                                  <div className="pull-left">
                                                      <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                                  </div>
                                                  <div className="pull-right mt-lg">
                                                      <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} xs={12}>
                            {/* Activity feed */}
                            <div className="card">
                                <div className="card-heading">
                                    {/* START dropdown */}
                                    <div className="pull-right">
                                        <Dropdown pullRight id="dd2">
                                            <Dropdown.Toggle bsStyle="default" noCaret className="btn btn-flat btn-flat-icon ripple">
                                              <em className="ion-android-more-vertical"></em>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="md-dropdown-menu" >
                                                <MenuItem eventKey="1">Last 30 days</MenuItem>
                                                <MenuItem eventKey="2">Last week</MenuItem>
                                                <MenuItem eventKey="3">Last year</MenuItem>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* END dropdown */}
                                    <div className="card-title">Activity</div><small>What's people doing right now</small>
                                </div>
                                <div className="card-body bb">
                                    <p className="pull-left mr"><a href=""><img src="img/user/04.jpg" alt="User" className="img-circle thumb32"/></a></p>
                                    <div className="oh">
                                        <p><strong className="spr">Adam</strong><span className="spr">posted in</span><a href="">Material</a></p>
                                        <p className="bl pl"><i>That's awesome!</i></p>
                                        <div className="clearfix">
                                            <div className="pull-left text-muted"><em className="ion-android-time mr-sm"></em><span>2 hours ago</span></div>
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="card-body bb">
                                    <p className="pull-left mr"><a href=""><img src="img/user/02.jpg" alt="User" className="img-circle thumb32"/></a></p>
                                    <div className="oh">
                                        <p><strong className="spr">Daniel</strong><span className="spr">joined to</span><a href="">Group</a></p>
                                        <p><span className="image-list"><a href=""><img src="img/user/03.jpg" alt="User" className="img-circle thumb32"/></a><a href=""><img src="img/user/04.jpg" alt="User" className="img-circle thumb32"/></a><a href=""><img src="img/user/05.jpg" alt="User" className="img-circle thumb32"/></a><a href=""><img src="img/user/07.jpg" alt="User" className="img-circle thumb32"/></a><strong><a href="" className="ml-sm link-unstyled">+3</a></strong></span></p>
                                        <div className="clearfix">
                                            <div className="pull-left text-muted"><em className="ion-android-time mr-sm"></em><span>yesterday</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body bb">
                                    <p className="pull-left mr"><a href=""><img src="img/user/03.jpg" alt="User" className="img-circle thumb32"/></a></p>
                                    <div className="oh">
                                        <p><strong className="spr">Leroy Day</strong><span className="spr">wakes up!</span></p>
                                        <p className="bl pl"><i>That's awesome!</i></p>
                                        <div className="clearfix">
                                            <div className="pull-left text-muted"><em className="ion-android-time mr-sm"></em><span>2 weeks ago</span></div>
                                        </div>
                                    </div>
                                </div><a href="" className="card-footer btn btn-flat btn-default"><small className="text-center text-muted lh1">See more activities</small></a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                      <Col xs={12} >
                          <Col xs={3} lg={3}>
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </Col>
                          <Col xs={3} lg={3}>
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </Col>
                          <Col xs={3} lg={3}>
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </Col>
                          <Col xs={3} lg={3}>
                            <div className="card">
                                <div className="card-body pv">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="m0 text-thin">350</h4><small className="m0 text-muted"><em className="mr-sm ion-arrow-up-b"></em>New visitors</small>
                                        </div>
                                        <div className="pull-right mt-lg">
                                            <div id="sparkline2" data-line-color="#4caf50" className="sparkline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12}>
                        <Col lg={3} className="text-left">
                          <button type="button" class="btn-square mr ripple btn btn-success">Show More</button>
                        </Col>
                      </Col>
                    </Row>
                </Grid>
            </section>
        );
  }
});