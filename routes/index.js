var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANJAC',
   datas:[
    {Name:'Sivagurunathan M',class:'II-MCA',rollno:'21PA33'},
    {Name:'Kaniraj',class:'II-MCA',rollno:'21PA20'},
    {Name:'Nagakarthik',class:'II-MCA',rollno:'21PA29'}
    ]});
});
// details:['Name','class','rollno'],
module.exports = router;
