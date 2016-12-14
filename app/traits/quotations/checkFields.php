<?php namespace Traits\Quotations;

trait checkFields {

  /**
   * if all passed fields are not empty return true
   * otherwise return false
   *  @param {array} fields
   *  @return {boolean}
   */
  public function checkFields($fields)
  {
    foreach ($fields as $field) {
      if ( empty($field) ) {
        return false;
      }
    }
    return true;
  }

}
