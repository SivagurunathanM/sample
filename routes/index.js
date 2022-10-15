var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANJAC',
   datas:[
    {Name:'HSC',class:'G.S.Hindu.Her.Sec School',rollno:'87'},
    {Name:'BCA',class:'Ayya Nadar Janaki Ammal College',rollno:'85'},
    {Name:'MCA',class:'Ayya Nadar Janaki Ammal College',rollno:'82'}
    ]});
});
// details:['Name','class','rollno'],
module.exports = router;
