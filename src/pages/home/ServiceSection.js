import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/SectionTitle'
import SingleService from '../../components/Service';

import shapeImg1 from '../../assets/img/service/sv-shape-1.png';
import shapeImg2 from '../../assets/img/service/sv-shape-2.png';

import serviceIconBg1 from '../../assets/img/service/sv-icon-shape-1.png'
import serviceIconBg2 from '../../assets/img/service/sv-icon-shape-2.png'
import serviceIconBg3 from '../../assets/img/service/sv-icon-shape-3.png'
import serviceIconBg4 from '../../assets/img/service/sv-icon-shape-4.png'
import serviceIconBg5 from '../../assets/img/service/sv-icon-shape-5.png'
import serviceIconBg6 from '../../assets/img/service/sv-icon-shape-6.png'

const Service = () => {

    return (
        <div className="service__area service__space service__mlr grey-bg pt-195 pb-70 p-relative">
            <div className="service__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="service__shape-2">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass= "service__section-box text-center pb-35 section-title-fixed-width"
                            subTitle= "Our Best Service"
                            Title= "Experts in Every Aspect Service lifecycle"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleService
                            itemClass= "service__item service__border-1 p-relative fix"
                            titleClass="service__title title-color-1"
                            btnClass= "service__link service__link-color-1"
                            serviceIconBg= {serviceIconBg1}
                            Title= "Get Latest Updates"
                            Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleService
                            itemClass= "service__item service__border-2 p-relative fix"
                            titleClass="service__title title-color-2"
                            btnClass= "service__link service__link-color-2"
                            serviceIconBg= {serviceIconBg2}
                            Title= "Get Latest Updates"
                            Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleService
                            itemClass= "service__item service__border-3 p-relative fix"
                            titleClass="service__title title-color-3"
                            btnClass= "service__link service__link-color-3"
                            serviceIconBg= {serviceIconBg3}
                            Title= "Get Latest Updates"
                            Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleService
                            itemClass= "service__item service__border-4 p-relative fix"
                            titleClass="service__title title-color-4"
                            btnClass= "service__link service__link-color-4"
                            serviceIconBg= {serviceIconBg4}
                            Title= "Get Latest Updates"
                            Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleService
                            itemClass= "service__item service__border-5 p-relative fix"
                            titleClass="service__title title-color-5"
                            btnClass= "service__link service__link-color-5"
                            serviceIconBg= {serviceIconBg5}
                            Title= "Get Latest Updates"
                            Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleService
                            itemClass= "service__item service__border-6 p-relative fix"
                            titleClass="service__title title-color-6"
                            btnClass= "service__link service__link-color-6"
                            serviceIconBg= {serviceIconBg6}
                            Title= "Get Latest Updates"
                            Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
                            btnText= "Read More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;