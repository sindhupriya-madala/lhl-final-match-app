const ServiceCardList = ({services}) =>
    <div className='services-column col s12 m8 l8'>            
      {services.map( (service) => {
        return(
          <ServiceThumb 
          service={service} key={service.id} 
          />
        )
      })}
    </div>