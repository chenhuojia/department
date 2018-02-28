import {Base} from '../../utils/base.js';
class Index extends Base{
  cacheKey="images";
  data() {
    let images = [
      { id: 1, pic: "../../images/6.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time:'2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/7.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/8.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/9.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 1, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/10.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 1, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/11.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/12.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/13.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time: '2018-08-12 12:02:12'},
      { id: 1, pic: "../../images/14.png", height: 0, name: '体育部', approve: 0, discuss: 0, dec: 'testejdjde', haveApprove: 0, time: '2018-08-12 12:02:12'}
    ];

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].imgId = baseId + "-" + i;
    }
    
    return images;
  }

}
export {Index};