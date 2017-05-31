const ServiceCardList = ({services}) =>

    <div id="services-container">
      {services.map( (service) => {
        console.log("service in servicecardlist is",service);
        return(
          <ServiceThumb 
            service={service} 
            key={service.id} 
          />
        )
      })}
    </div>
