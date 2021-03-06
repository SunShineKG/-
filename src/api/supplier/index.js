import { get, post } from '../index';

//获取供应商分类数据
export function getSupplierClassify(that) {
  get('/api/getSupplierClassify').then((res) => {
    if( res.result === 1 ){
      that.data = res.data;
      that.aa = true
    }else if(res.result === 0) {
      that.$message.error('获取数据失败，请稍后重试！');
    }
  })
}

//获取供应商列表
export function getSupplier(that, data) {
  post('/api/getSupplier', data).then((res) => {
    if( res.result === 1 ){
      that.listData = res.data.rows;
      that.total = res.data.total;
      that.isShowClassifyCom = !that.isShowClassifyCom;
    }else if( res.result === 0 ) {
      that.$message.error( res.message );
    }
  })
}

