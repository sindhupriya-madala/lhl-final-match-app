const ServiceCardList = ({services}) =>
<div className="row">
    <div className="col s12 m1 l1"></div>
    <div className='col s12 m10 l10'>    
      {services.map( (service) => {
        return(
          <ServiceThumb 
          service={service} key={service.id} 
          />
        )
      })}
    </div>
    <div className="col s12 m1 l1"></div>
</div>