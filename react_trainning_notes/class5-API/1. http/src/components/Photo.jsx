const Photo = (props) => {
    const { title, thumbnailUrl } = props.data;
    return(
        <div class="col-sm-3">
          <div class="card">
            <img src={ thumbnailUrl } className="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{ title }</h5>
             
            </div>
          </div>
        </div>
    )
}
export default Photo;