/**
* NumberRectangle.js by Nera Liu. Feb 5, 2011
* Visit blog.neraliu.com/nengine for documentation, updates and more free code.
*
*
* Copyright (c) 2011 Nera Liu
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
**/

/**
* Represents a NumberRectangle in x / y coordinates.
**/

(function(NEngine) {

  /**
  * NumberRectangle's constructor.
  **/
  function NumberRectangle(x, y, w, h, filled) {
    this.__displayobject_init("NumberRectangle");
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.regX = w/2;
    this.regY = h/2;
    this.number = new NEngine.StaticText(x+w/2,y+h/2,this.id,true);
    this.number.textAlign = "center";
    this.number.textBaseline = "middle";
    if (typeof filled == 'boolean') { this.filled = filled; }
  }

  NumberRectangle.inheritsFrom(NEngine.Shape);

  NumberRectangle.prototype.number;

  /**
  * Clone the NumberRectangle object.
  * @method NumberRectangle.clone()
  **/
  NumberRectangle.prototype.clone = function() {
    return new NumberRectangle(this.x, this.y, this.width, this.height, this.filled);
  }

  /**
  * Return the string of NumberRectangle object.
  * @method NumberRectangle.toString()
  **/
  NumberRectangle.prototype.toString = function() {
    return this.name + "(id:" + this.id + ",x:" + this.x + ",y:" + this.y + ",w:" + this.width + ",h:" + this.height + ")";
  }

  /**
  * Draw the NumberRectangle on the canvas.
  * @method NumberRectangle.draw(ctx, ignoreCache)
  **/
  NumberRectangle.prototype.draw = function(ctx, ignoreCache) {
    if (this.__draw(ctx, ignoreCache)) { return true; }
    this.applyStyle(ctx);
    if (this.filled) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
      this.number.draw(ctx);
    } else {
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      this.number.draw(ctx);
    }
    this.resetStyle(ctx);
  }

  /**
  * Test whether the mouseX/Y is in bound of the NumberRectangle.
  * @method NumberRectangle.inBounds(globalX, globalY)
  **/
  NumberRectangle.prototype.inBounds = function(globalX, globalY) {
    var inBounds = (globalX >= this.x && globalY >= this.y && globalX < (this.x + this.width) && globalY < (this.y + this.height));
    return inBounds;
  }

  /**
  * Exposing the NumberRectangle to the NEngine global object.
  **/
  NEngine.NumberRectangle = NumberRectangle;

}(NEngine));
