class Profile {
  constructor({
    img,
    name,
    location,
    description,
    social_media_list
  }) {
    this.img = img;
    this.name = name;
    this.location = location;
    this.description = description;
    this.social_media_list = social_media_list;

    this.buildProfileWrapper();
  }

  get profileWrapper() {
    return this.$profileWrapper;
  }

  buildHeader = () => {
    const $header = document.createElement('div');
    $header.className = 'header';
  
    const $pfp = document.createElement('img');
    $pfp.className = 'header__photo';

    $pfp.setAttribute('src', `${this.img}`);
    $pfp.setAttribute('alt', 'A profile photo');
  
    const $name = document.createElement('h1');
    $name.className = 'header__name';

    $name.innerText = this.name;
  
    const $location = document.createElement('h2');
    $location.className = 'header__location';

    $location.innerText = this.location;
  
    const $description = document.createElement('p');
    $description.className = 'header__description';

    $description.innerText = this.description;
  
    $header.appendChild($pfp);
    $header.appendChild($name);
    $header.appendChild($location);
    $header.appendChild($description);
  
    return $header;
  }
  
  buildLinksWrapper = () => {
    const $linksWrapper = document.createElement('div');
    $linksWrapper.className = 'links_wrapper';
  
    this.social_media_list.forEach(({link, name}) => {
      const $link = document.createElement('a');
      $link.className = 'social_media_link';

      $link.setAttribute('href', link);
      $link.setAttribute('target', '_blank');

      $link.innerText = name;
  
      $linksWrapper.appendChild($link);
    });
  
    return $linksWrapper;
  }
  
  buildProfileWrapper = () => {
    const $profileWrapper = document.createElement('div')
    $profileWrapper.className = 'profile_wrapper';
  
    const $profile = document.createElement('div');
    $profile.className = 'profile';
  
    $profile.appendChild(this.buildHeader());
    $profile.appendChild(this.buildLinksWrapper());
  
    $profileWrapper.appendChild($profile);
  
    this.$profileWrapper = $profileWrapper;
  }
}

export default Profile;