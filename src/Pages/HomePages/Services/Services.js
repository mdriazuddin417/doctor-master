import React from "react";

import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div className="max-w-7xl my-5 px-12" id="services">
      <h2 className="text-center text-3xl  section-header uppercase relative pb-2">
        My Services
      </h2>
      <h3 className="text-center text-xl text-blue-300 ">
        I'm Available For you
      </h3>
      <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 lg:gap-20 mt-3">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
