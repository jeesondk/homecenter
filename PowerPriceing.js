
var count = context.get('count')||0;
count += 1;

count = 0;
context.set('count',count);


var now     = new Date();
var hour    = now.getHours();

var fixedCost = '1.76';

var msg1 = { payload:"currentelectricityprice" };
var msg2 = { payload:"currentelectricitypriceplus1" };
var msg3 = { payload:"currentelectricitypriceplus2" };
var msg4 = { payload:"currentelectricitypriceplus3" };
var msg5 = { payload:"currentelectricitypriceplus4" };
var msg6 = { payload:"currentelectricitypriceplus5" };
var msg7 = { payload:"currentelectricitypriceplus6" };
var msg8 = { payload:"currentelectricitypriceplus7" };
var msg9 = { payload:"currentelectricitypriceplus8" };
var msg10 = { payload:"currentelectricitypriceplus9" };
var msg11 = { payload:"currentelectricitypriceplus10" };
var msg12 = { payload:"currentelectricitypriceplus11" };
var msg13 = { payload:"currentelectricitypriceplus12" };
var msg14 = { payload:"currentelectricitypriceplus13" };
var msg15 = { payload:"currentelectricitypriceplus14" };
var msg16 = { payload:"currentelectricitypriceplus15" };
var msg17 = { payload:"currentelectricitypriceplus16" };
var msg18 = { payload:"currentelectricitypriceplus17" };
var msg19 = { payload:"currentelectricitypriceplus18" };
var msg20 = { payload:"currentelectricitypriceplus19" };
var msg21 = { payload:"currentelectricitypriceplus20" };
var msg22 = { payload:"currentelectricitypriceplus21" };
var msg23 = { payload:"currentelectricitypriceplus22" };
var msg24 = { payload:"currentelectricitypriceplus23" };

var price = 1.0;

price = parseFloat((1.76 + parseFloat(msg.data.attributes.current_price)).toFixed(2));
msg1.payload = price.toString();

if ((hour+1)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+1])).toFixed(2));
}
msg2.payload = price.toString();

if ((hour+2)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+1-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+2])).toFixed(2));
}
msg3.payload = price.toString();

if ((hour+3)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+2-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+3])).toFixed(2));
}
msg4.payload = price.toString();

if ((hour+4)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+3-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+4])).toFixed(2));
}
msg5.payload = price.toString();

if ((hour+5)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+4-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+5])).toFixed(2));
}
msg6.payload = price.toString();

if ((hour+6)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+5-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+6])).toFixed(2));
}
msg7.payload = price.toString();

if ((hour+7)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+6-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+7])).toFixed(2));
}
msg8.payload = price.toString();

if ((hour+8)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+7-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+8])).toFixed(2));
}
msg9.payload = price.toString();

if ((hour+9)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+8-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+9])).toFixed(2));
}
msg10.payload = price.toString();

if ((hour+10)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+9-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+10])).toFixed(2));
}
msg11.payload = price.toString();

if ((hour+11)>23){10
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+10-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+11])).toFixed(2));
}
msg12.payload = price.toString();

if ((hour+12)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+11-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+12])).toFixed(2));
}
msg13.payload = price.toString();

if ((hour+13)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+12-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+13])).toFixed(2));
}
msg14.payload = price.toString();

if ((hour+14)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+13-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+14])).toFixed(2));
}
msg15.payload = price.toString();

if ((hour+15)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+14-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+15])).toFixed(2));
}
msg16.payload = price.toString();

if ((hour+16)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+15-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+16])).toFixed(2));
}
msg17.payload = price.toString();

if ((hour+17)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+16-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+17])).toFixed(2));
}
msg18.payload = price.toString();

if ((hour+18)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+17-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+18])).toFixed(2));
}
msg19.payload = price.toString();

if ((hour+19)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+18-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+19])).toFixed(2));
}
msg20.payload = price.toString();

if ((hour+20)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+19-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+20])).toFixed(2));
}
msg21.payload = price.toString();

if ((hour+21)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+20-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+21])).toFixed(2));
}
msg22.payload = price.toString();

if ((hour+22)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+21-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+22])).toFixed(2));
}
msg23.payload = price.toString();

if ((hour+23)>23){
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.tomorrow[(hour+22-23)])).toFixed(2));
} else
{
    price = parseFloat((1.76 + parseFloat(msg.data.attributes.today[hour+23])).toFixed(2));
}
msg24.payload = price.toString();

return [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13, msg14, msg15, msg16, msg17, msg18, msg19, msg20, msg21, msg22, msg23, msg24 ];